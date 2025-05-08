const connectDB = require('../../utils/db');
const Course = require('../../models/Course');

module.exports = async (req, res) => {
  await connectDB();
  const { id } = req.query;

  if (req.method === 'GET') {
    const course = await Course.findById(id);
    if (!course) return res.status(404).json({ error: 'Course not found' });
    return res.status(200).json(course);
  }

  if (req.method === 'PUT') {
    try {
      const updated = await Course.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true
      });
      if (!updated) return res.status(404).json({ error: 'Course not found' });
      return res.status(200).json(updated);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  if (req.method === 'DELETE') {
    const deleted = await Course.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ error: 'Course not found' });
    return res.status(200).json({ message: 'Course deleted successfully', deleted });
  }

  return res.status(405).json({ error: 'Method not allowed' });
};
