const Studentcourse = require('../models/Studentcourse-m');
const Student = require('../models/student-m');
const Course = require('../models/courses-m');

const createStudentcourse = async (req, res) => {
    try {
        const { Student_id, Course_id } = req.body;

        // Checking to see if the student already existsm
        const studentExists = await Student.findOne({ Student_id });

        if (!studentExists) {
            return res.status(400).json({ message: "Student doesn't exist" });
        }

        // Checking to see if the course with the given ID exists
        const courseExists = await Course.findOne({ Course_id });

        if (!courseExists) {
            return res.status(400).json({ message: "Course with the given ID doesn't exist" });
        }

        // Checking to see if the student and course association exists
        const associationExists = await Studentcourse.findOne({ Student_id, Course_id });

        if (associationExists) {
            return res.status(400).json({ message: "Student and course association already exists" });
        }

        // Create Studentcourse if the student and course association doesn't exist
        const newStudentcourse = await Studentcourse.create({ Student_id, Course_id });

        res.status(201).json(newStudentcourse);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getStudentcourse = async (req, res) => {
    try {
        const allstudentcourse = await Studentcourse.find();
        res.status(200).json(allstudentcourse);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
// now to delete a student course
const deleteStudentcourse = async (req, res) => {
    try {
        const { Student_id, Course_id } = req.body;

        // Checking to see if the student and course association exists
        const associationExists = await Studentcourse.findOne({ Student_id, Course_id });

        if (!associationExists) {
            return res.status(400).json({ message: "Student course association doesn't exist" });
        }

        // Deleting the student and course association
        await Studentcourse.findOneAndDelete({ Student_id, Course_id });

        res.status(200).json({ message: "Student course association deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
// get list of courses associated with a student id  
const getStudentcoursesByStudentId = async (req, res) => {
    try {
        const { Student_id } = req.params;
        const studentcourses = await Studentcourse.find({ Student_id });
        res.status(200).json(studentcourses);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
//get a list of students with associated courses id
const getStudentcoursesByCourseId = async (req, res) => {
    try {
        const { Course_id } = req.params;
        const studentcourses = await Studentcourse.find({ Course_id });
        res.status(200).json(studentcourses);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


module.exports = { createStudentcourse, getStudentcourse, deleteStudentcourse, getStudentcoursesByStudentId, getStudentcoursesByCourseId };


