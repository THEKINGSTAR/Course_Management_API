const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: String, // base64 string or image URL
  startDate: Date,
  endDate: Date,
  price: {
    type: Number,
    required: true
  }
}, {
  timestamps: true // This adds createdAt and updatedAt automatically
});

module.exports = mongoose.model('Course', courseSchema);
