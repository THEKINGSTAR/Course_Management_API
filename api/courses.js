// THIS CONFIGRATION FOR WORKING AS SERVERLESS  ON vercel

const mongoose = require('mongoose');
const Course = require('../models/Course');

let cached = global.mongoose || { conn: null };

export default async function handler(req, res) {
  if (!cached.conn) {
    try {
      cached.conn = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      global.mongoose = cached;
    } catch (err) {
      return res.status(500).json({ error: 'MongoDB connection error' });
    }
  }

  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const courses = await Course.find();
        return res.status(200).json(courses);
      } catch (err) {
        return res.status(500).json({ error: err.message });
      }

    case 'POST':
      try {
        const { title, description, image, startDate, endDate, price } = req.body;
        const course = new Course({ title, description, image, startDate, endDate, price });
        await course.save();
        return res.status(201).json(course);
      } catch (err) {
        return res.status(400).json({ error: err.message });
      }

    default:
      res.setHeader('Allow', ['GET', 'POST']);
      return res.status(405).end(`Method ${method} Not Allowed`);
  }
}
