const mongoose = require('mongoose')

const favoriteSchema = new mongoose.Schema({
  comics: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comic'}],
  total: {
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

module.exports = mongoose.model('Favorite', favoriteSchema)
