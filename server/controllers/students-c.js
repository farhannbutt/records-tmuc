const Students = require('../models/student-m');

const createStudent = async (req, res) => {
    try {
        const { ID, Department_id, Campus_id, Name, Email, Phone } = req.body;

        // Checking to see if the email already exists
        const studentExists = await Students.findOne({ Email });

        if (studentExists) {
            return res.status(400).json({ message: "Email already exists" });
        }

        // Adding data for students
        const newStudent = await Students.create({
            ID,
            Department_id,
            Campus_id,
            Name,
            Email,
            Phone
        });

        res.status(201).json(newStudent);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
// get request for all students
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
    getStudents,
};
