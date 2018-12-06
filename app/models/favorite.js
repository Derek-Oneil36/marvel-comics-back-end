const mongoose = require('mongoose')

const favoriteSchema = new mongoose.Schema({
  comicId: {
    type: Number,
    required: false
  },
  rating: {
    type: Number,
    required: false
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Favorite', favoriteSchema)
