const mongoose = require('mongoose')

const comicSchema = new mongoose.Schema({
  comics: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comic'}],
  name: {
    title: String,
    required: true
  },
  issue: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Comic', comicSchema)
