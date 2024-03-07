const  Students  = require('../models/student-m'); //  importing  Sequelize model

const students = async (req, res) => {
    try {
        console.log(req.body)
        const { ID, Department_id, Campus_id, Name, Email, Phone } = req.body;
        //checking to see that emails are not recreated
        const studentExists = await Students.findOne({Email:Email})

    if(studentExists){
        return res.status(400).json({mssg:"email already exists"})
    }
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
