const connectDB = require('../../utils/db');
const Course = require('../../models/Course');

module.exports = (req, res) => {
  res.status(200).json({ message: 'Course Management API is running.' });
};

module.exports = async (req, res) => {
  await connectDB();

  if (req.method === 'GET') {
    const courses = await Course.find();
    return res.status(200).json(courses);
  }

  if (req.method === 'POST') {
    try {
      const course = new Course(req.body);
      const saved = await course.save();
      return res.status(201).json(saved);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
};

