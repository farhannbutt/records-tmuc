const  Department  = require('../models/department-m'); //  importing  Sequelize model

const department= async (req, res) => {
    try {
        console.log(req.body)
        const {  Department_id,  ContactNumber, Name,  Program } = req.body;
        //adding fields for department

        await Department.create({
            Department_id,
            ContactNumber,
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

module.exports = department
