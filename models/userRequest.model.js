const mongoose = require('mongoose');

const userRequestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
    required: true
  },
  movieId: {
    type: String,
  },
  date: {
    type: Date
  },
  description: {
    type: String
  }
});

const userRequest = mongoose.model('userRequestSchema', userRequestSchema);

module.exports = userRequest;