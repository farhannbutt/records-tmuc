const Course = require('../models/courses-m');

// Create a new course
const createCourse = async (req, res) => {
    try {
        const { Course_id, Name, Credits, Program, Room_id, time_slot } = req.body;

        // Checking if the course already exists
        const courseExists = await Course.findOne({ Course_id });

        if (courseExists) {
            return res.status(400).json({ message: "Course already exists" });
        }

        // Adding data for the course
        const newCourse = await Course.create({
            Course_id,
            Name,
            Credits,
            Program,
            Room_id,
            time_slot
        });

        res.status(201).json(newCourse);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Get a course by ID
const getCourseById = async (req, res) => {
    try {
        const courseId = req.params.course_id;

        // Fetch course by custom ID
        const course = await Course.findOne({ Course_id: courseId });

        if (!course) {
            return res.status(404).json({ message: "Course not found" });
        }

        res.status(200).json(course);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Delete a course by ID
const deleteCourseById = async (req, res) => {
    try {
        const courseId = req.params.course_id;

        // Delete course by custom ID
        const deletedCourse = await Course.findOneAndDelete({ Course_id: courseId });

        if (!deletedCourse) {
            return res.status(404).json({ message: "Course not found" });
        }

        res.status(200).json(deletedCourse);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Get all courses
const getCourses = async (req, res) => {
    try {
        // Fetch all courses
        const allCourses = await Course.find();

        res.status(200).json(allCourses);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
// Get courses by Room_id
const getCoursesByRoomId = async (req, res) => {
    try {
        const { Room_id } = req.params;

        // Fetch courses by Room_id
        const courses = await Course.find({ Room_id });

        if (!courses.length) {
            return res.status(404).json({ message: "No courses found for this room" });
        }

        res.status(200).json(courses);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { createCourse, getCourseById, deleteCourseById, getCourses, getCoursesByRoomId };

