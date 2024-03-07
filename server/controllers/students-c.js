const  Students  = require('../models/student-m'); // Make sure to import your Sequelize model

const students = async (req, res) => {
    try {
        const { ID, Department_id, Campus_id, Name, Email, Phone } = req.body;

        // adding data for students
        const newStudent = await Students.create({
            ID,
            Department_id,
            Campus_id,
            Name,
            Email,
            Phone
        });
        //

        res.status(201).json(newStudent);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = students
