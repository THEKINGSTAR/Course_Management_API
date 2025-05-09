// models/Course.js
import mongoose from 'mongoose';

const CourseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  image: String,
  startDate: Date,
  endDate: Date,
  price: Number,
}, { timestamps: true });

export default mongoose.models.Course || mongoose.model('Course', CourseSchema);
