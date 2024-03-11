const  Devices  = require('../models/rfid_device-m'); //  importing  Sequelize model

const createrfid_id = async (req, res) => {
    try {
        console.log(req.body)
        const { Device_id, Name} = req.body;
        //adding fields for devices

        await Devices.create({
            Device_id,
            Name
    
        });
        //

        res.status(200).send(req.body);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

//function to update rfid device with error message
const updaterfid_id = async (req, res) => {
    try {
        const rfidID = req.params.Device_id;
        const { Name,Device_id  } = req.body;

        // Update student by custom ID
        const updatedrfid = await Devices.findOneAndUpdate(
            { Device_id: rfidID },
            { Name, Device_id },
            { new: true } // Return the updated document
        );

        if (!updatedrfid) {
            return res.status(404).json({ message: "device not found" });
        }

        res.status(200).json(updatedrfid);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


// funciton to get all rfid devices and an error message if nothing in the db
const getrfid_id = async (req, res) => {
    try {
        // Fetch all staff 
        const allDevices= await Devices.find();

        res.status(200).json(allDevices);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

//delete rfid device with message
const deleterfid_id = async (req, res) => {
    try {
        const rfidID = req.params.Device_id;

        // Delete RFID device by custom ID
        const deletedrfid = await Devices.findOneAndDelete({ Device_id: rfidID });

        if (!deletedrfid) {
            return res.status(404).json({ message: "Device not found" });
        }

        res.status(200).json(deletedrfid);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
// function to get rfid id device by id and error message if it isnt available
const getrfidById = async (req, res) => {
    try {
        const rfidID = req.params.Device_id;

        // Fetch RFID device by custom ID
        const rfid = await Devices.findOne({ Device_id: rfidID });

        if (!rfid) {
            return res.status(404).json({ message: "Device not found" });
        }

        res.status(200).json(rfid);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {createrfid_id, updaterfid_id, getrfid_id, deleterfid_id, getrfidById}
