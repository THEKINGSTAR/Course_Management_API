
// FOR WORKING WITH SERVER
/* 
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

*/


// FOR WORKING ON VERCEL SERVERLESS

const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  startDate: Date,
  endDate: Date,
  price: Number
}, { timestamps: true });

module.exports = mongoose.models.Course || mongoose.model('Course', CourseSchema);
