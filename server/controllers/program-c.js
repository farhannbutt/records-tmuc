const  Program  = require('../models/program-m'); //  importing  Sequelize model

const program = async (req, res) => {
    try {
        console.log(req.body)
        const { ProgramID,  Name,  AwardingBody,  Courses} = req.body;
        //adding fields for program

        await Courses.create({
            ProgramID,
            AwardingBody,
            Name,
            Courses
    
        });
        //

        res.status(200).send(req.body);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = program