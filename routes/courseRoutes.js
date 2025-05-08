// routes/courseRoutes.js

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Course = require('../models/Course');

// Test route
router.get('/test', (req, res) => {
  res.send('Course routes working');
});

// ✅ GET all courses
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ GET course by ID
router.get('/:id', async (req, res) => {
  const courseId = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(courseId)) {
    return res.status(400).json({ error: 'Invalid Course ID format' });
  }

  try {
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }
    res.json(course);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ POST / — Add a new course
router.post('/', async (req, res) => {
  try {
    const { title, description, image, startDate, endDate, price } = req.body;

    if (!title || !description || price === undefined) {
      return res.status(400).json({ error: 'Title, description, and price are required' });
    }

    const newCourse = new Course({
      title,
      description,
      image,
      startDate,
      endDate,
      price,
    });

    const savedCourse = await newCourse.save();
    res.status(201).json(savedCourse);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;


// PUT || /api/courses/:id || Update existing course
router.put('/:id', async (req, res) => {
    const courseId = req.params.id;

    if(!mongoose.Types.ObjectId.isValid(courseId))
    {
        return res.status(400).json({error: 'Invalid Course ID format'});
    }

    try
    {
        // Find the Course by id
        const updatedCourse = await Course.findByIdAndUpdate(
            courseId,
            req.body,
            { new: true, runValidators: true }
        );

        if(!updatedCourse)
            {
            return res.status(404).json({error: 'Course Not Found'});
            }
    }
    catch (err)
    {
        res.status(500).json({error: err.message});
    }
});


// DELETE || /api/courses/:id || Delete course by ID
router.delete('/:id', async (req, res) => {
    const courseId = req.params.id;

    if(!mongoose.Types.ObjectId.isValid(courseId))
    {
        return res.status(400).json({error: 'Invalid Course ID format'});
    }

    try
    {
        // Find the Course by id
        const deletedCourse = await Course.findByIdAndDelete(courseId);

        if(!deletedCourse )
            {
            return res.status(404).json({error: 'Course Not Found'});
            }

            res.json({ message: 'Course deleted successfully', deletedCourse });
    }
    catch (err)
    {
        res.status(500).json({error: err.message});
    }
});