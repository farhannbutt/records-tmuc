const  Devices  = require('../models/rfid_device-m'); //  importing  Sequelize model

const devices = async (req, res) => {
    try {
        console.log(req.body)
        const { ID, Name} = req.body;
        //adding fields for devices

        await Devices.create({
            ID,
             Name
    
        });
        //

        res.status(200).send(req.body);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = devices
