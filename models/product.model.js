const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  beforeDubbingLink: {
    type: String,
  },
  afterDubbingLink: {
    type: String
  }
});

const product = mongoose.model('product', productSchema);

module.exports = product;