const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  imageurl: {
    type: String,
    required: true
  },
  ytId: {
    type: String,
  },
  ytIdBeforeDubbing: {
    type: String
  },
  videoDuration: {
    type: Number
  },
  makingDuration: {
    type: Number
  },
  budget: {
    type: Number
  },
  fromLanguage:{
    type: String
  },
  toLanguage: {
    type: String
  },
  description: {
    type: String
  }
});

const product = mongoose.model('product', productSchema);

module.exports = product;