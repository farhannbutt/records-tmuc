const  Courses  = require('../models/courses-m'); //  importing  Sequelize model

const courses = async (req, res) => {
    try {
        console.log(req.body)
        const { Course_id,  Credits, Name,  Program } = req.body;
        //adding fields for courses

        await Courses.create({
            Course_id,
            Credits,
            Name,
            Program
    
        });
        //

        res.status(200).send(req.body);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = courses
