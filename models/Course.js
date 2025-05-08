models/Course.js

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
