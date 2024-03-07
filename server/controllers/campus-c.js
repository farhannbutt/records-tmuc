const  Campus  = require('../models/campus-m'); //  importing  Sequelize model

const campus = async (req, res) => {
    try {
        console.log(req.body)
        const { Campus_id, Campus_manager, Name, Location, Contact_number } = req.body;
        //adding fields

        await Campus.create({
            Campus_id,
            Campus_manager,
            Name,
            Location,
            Contact_number,
           
    
        });
        //

        res.status(200).send(req.body);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = campus
