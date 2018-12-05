// Express docs: http://expressjs.com/en/api.html
const express = require('express')
// Passport docs: http://www.passportjs.org/docs/
const passport = require('passport')

// pull in Mongoose model for comics
const Comic = require('../models/order')

// we'll use this to intercept any errors that get thrown and send them
// back to the client with the appropriate status code
const handle = require('../../lib/error_handler')

// this is a collection of methods that help us detect situations when we need
// to throw a custom error
const customErrors = require('../../lib/custom_errors')

// we'll use this function to send 404 when non-existant document is requested
const handle404 = customErrors.handle404
// we'll use this function to send 401 when a user tries to modify a resource
// that's owned by someone else
const requireOwnership = customErrors.requireOwnership

// passing this as a second argument to `router.<verb>` will make it
// so that a token MUST be passed for that route to be available
// it will also set `res.user`
const requireToken = passport.authenticate('bearer', { session: false })

// instantiate a router (mini app that only handles routes)
const router = express.Router()

// INDEX
// GET /comics
router.get('/comics', requireToken, (req, res) => {
  Comic.find().populate('comics')
    .then(comics => {
      console.log(req.user.id)

      const ordersByOwner = comics.filter(order => {
        if (order.owner === req.user.id) {
          return true
        }
      })
      console.log(ordersByOwner)
      // pass the `req` object and the Mongoose record to `requireOwnership`
      // it will throw an error if the current user isn't the owner
      // requireOwnership(req, comics)
      // `comics` will be an array of Mongoose documents
      // we want to convert each one to a POJO, so we use `.map` to
      // apply `.toObject` to each one
      return ordersByOwner.map(order => order.toObject())
      // return order.filter()
    })
    // respond with status 200 and JSON of the comics
    .then(comics => res.status(200).json({ comics: comics }))
    // if an error occurs, pass it to the handler
    .catch(err => handle(err, res))
})

// SHOW
// GET /comics/5a7db6c74d55bc51bdf39793
router.get('/comics/:id', requireToken, (req, res) => {
  // req.params.id will be set based on the `:id` in the route
  Comic.findById(req.params.id)
    .then(handle404)
    // if `findById` is succesful, respond with 200 and "order" JSON
    .then(order => res.status(200).json({ order: order.toObject() }))
    // if an error occurs, pass it to the handler
    .catch(err => handle(err, res))
})

// CREATE
// POST /comics
router.post('/comics', requireToken, (req, res) => {
  // set owner of new order to be current user
  req.body.order.owner = req.user.id

  console.log(req.body.order)

  Comic.create(req.body.order)
    // respond to succesful `create` with status 201 and JSON of new "order"
    .then(order => {
      res.status(201).json({ order: order.toObject() })
    })
    // if an error occurs, pass it off to our error handler
    // the error handler needs the error message and the `res` object so that it
    // can send an error message back to the client
    .catch(err => handle(err, res))
})

// UPDATE
// PATCH /comics/5a7db6c74d55bc51bdf39793
router.patch('/comics/:id', requireToken, (req, res) => {
  // if the client attempts to change the `owner` property by including a new
  // owner, prevent that by deleting that key/value pair
  delete req.body.order.owner

  Comic.findById(req.params.id)
    .then(handle404)
    .then(order => {
      // pass the `req` object and the Mongoose record to `requireOwnership`
      // it will throw an error if the current user isn't the owner
      requireOwnership(req, order)

      // the client will often send empty strings for parameters that it does
      // not want to update. We delete any key/value pair where the value is
      // an empty string before updating
      Object.keys(req.body.order).forEach(key => {
        if (req.body.order[key] === '') {
          delete req.body.order[key]
        }
      })

      // pass the result of Mongoose's `.update` to the next `.then`
      // return order.update(req.body.order)

      // console.log('order in req.body ', req.body.order)
      Comic.findOneAndUpdate(
        { _id: req.params.id },
        { $push: { comics: req.body.order.comics } },
        { new: true }).exec()
    })
    // if that succeeded, return 204 and no JSON
    .then(() => res.sendStatus(204))
    // if an error occurs, pass it to the handler
    .catch(err => handle(err, res))
})

// DESTROY
// DELETE /comics/5a7db6c74d55bc51bdf39793
router.delete('/comics/:id', requireToken, (req, res) => {
  Comic.findById(req.params.id)
    .then(handle404)
    .then(order => {
      // throw an error if current user doesn't own `order`
      requireOwnership(req, order)
      // delete the order ONLY IF the above didn't throw
      order.remove()
    })
    // send back 204 and no content if the deletion succeeded
    .then(() => res.sendStatus(204))
    // if an error occurs, pass it to the handler
    .catch(err => handle(err, res))
})

module.exports = router
