const  Floor  = require('../models/floor-m'); //  importing  Sequelize model

const floor = async (req, res) => {
    try {
        console.log(req.body)
        const { Floor_id,  Department_id,  Floor_number} = req.body;
        //adding fields for floor

        await Courses.create({
            Floor_id,
            Department_id,
            Floor_number
        });
        //

        res.status(200).send(req.body);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = floor