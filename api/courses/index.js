// api/courses/index.js
import dbConnect from '../../utils/db';
import Course from '../../models/Course';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      const courses = await Course.find({});
      res.status(200).json(courses);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  } else if (req.method === 'POST') {
    try {
      const course = await Course.create(req.body);
      res.status(201).json(course);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
