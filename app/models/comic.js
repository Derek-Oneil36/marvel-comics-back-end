const mongoose = require('mongoose')

const comicSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  issue: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
  // date: {
  //   type: Number,
  //   required: true
  // },
  // img: {
  //   type: Image,
  //   required: true
  // }
}, {
  timestamps: true
})

module.exports = mongoose.model('Comic', comicSchema)
