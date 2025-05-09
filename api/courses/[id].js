// api/courses/[id].js
import dbConnect from '../../utils/db';
import Course from '../../models/Course';
import mongoose from 'mongoose';

export default async function handler(req, res) {
  const { id } = req.query;
  await dbConnect();

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Invalid ID format' });
  }

  switch (req.method) {
    case 'GET':
      try {
        const course = await Course.findById(id);
        if (!course) return res.status(404).json({ error: 'Course not found' });
        res.status(200).json(course);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
      break;

    case 'PUT':
      try {
        const updated = await Course.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        if (!updated) return res.status(404).json({ error: 'Course not found' });
        res.status(200).json(updated);
      } catch (err) {
        res.status(400).json({ error: err.message });
      }
      break;

    case 'DELETE':
      try {
        const deleted = await Course.findByIdAndDelete(id);
        if (!deleted) return res.status(404).json({ error: 'Course not found' });
        res.status(200).json({ message: 'Course deleted', deleted });
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
