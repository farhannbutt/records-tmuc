const Students = require('../models/student-m');

const createStudent = async (req, res) => {
    try {
        const { student_id, Department_id, Campus_id, Name, Email,  contact_number, rfid } = req.body;

        // Checking to see if the email already exists
        const studentExists = await Students.findOne({ Email });

        if (studentExists) {
            return res.status(400).json({ message: "Email already exists" });
        }

        // Adding data for students
        const newStudent = await Students.create({
            student_id,
            Department_id,
            Campus_id,
            Name,
            Email,
            contact_number,
            rfid
        });

        res.status(201).json(newStudent);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
// get a student by entering student id
const getStudentById = async (req, res) => {
    try {
        const studentId = req.params.student_id;

        // Fetch student by custom ID
        const student = await Students.findOne({ student_id: studentId });

        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }
//check to see error while fetching a request
        res.status(200).json(student);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
// function to update a student  by id and error mesages included

const updateStudentById = async (req, res) => {
    try {
        const studentId = req.params.student_id;
        const { Department_id, Campus_id, Name, Email, contact_number, rfid } = req.body;

        // Update student by custom ID
        const updatedStudent = await Students.findOneAndUpdate(
            { student_id: studentId },
            { Department_id, Campus_id, Name, Email, contact_number, rfid },
            { new: true } // Return the updated document
        );

        if (!updatedStudent) {
            return res.status(404).json({ message: "Student not found" });
        }

        res.status(200).json(updatedStudent);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
//function to delete a user by id  and error aswell
const deleteStudentById = async (req, res) => {
    try {
        const studentId = req.params.student_id;

        // Delete student by custom ID
        const deletedStudent = await Students.findOneAndDelete({ student_id: studentId });

        if (!deletedStudent) {
            return res.status(404).json({ message: "Student not found" });
        }

        res.status(200).json(deletedStudent);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
// funciton to fetch all students and an error message if nothing in the db
const getStudents = async (req, res) => {
    try {
        // Fetch all students
        const allStudents = await Students.find();

        res.status(200).json(allStudents);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    createStudent,
    getStudentById,
    updateStudentById,
    deleteStudentById,
    getStudents
};