const Studentdevice = require('../models/Studentdevice-m');
const Student = require('../models/student-m');
const Device = require('../models/rfid_device-m');

const createStudentdevice = async (req, res) => {
    try {
        const { Student_id, Device_id } = req.body;

        // Checking to see if the student already exists
        const studentExists = await Student.findOne({ Student_id });

        if (!studentExists) {
            return res.status(400).json({ message: "Student doesn't exist" });
        }

        // Checking to see if the Device with the given ID exists
        const deviceExists = await Device.findOne({ Device_id });

        if (!deviceExists) {
            return res.status(400).json({ message: "device with the given ID doesn't exist" });
        }

        // Checking to see if the student and Device association exists
        const associationExists = await Studentdevice.findOne({ Student_id, Device_id });

        if (associationExists) {
            return res.status(400).json({ message: "Student and Device association already exists" });
        }

        // Create Studentdevice if the student and Device association doesn't exist
        const newStudentdevice = await Studentdevice.create({ Student_id, Device_id });

        res.status(201).json(newStudentdevice);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getStudentdevice = async (req, res) => {
    try {
        const allstudentdevice = await Studentdevice.find();
        res.status(200).json(allstudentdevice);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
// now to delete a student Device
const deleteStudentdevice = async (req, res) => {
    try {
        const { Student_id, Device_id } = req.body;

        // Checking to see if the student and Device association exists
        const associationExists = await Studentdevice.findOne({ Student_id, Device_id });

        if (!associationExists) {
            return res.status(400).json({ message: "Student Device association doesn't exist" });
        }

        // Deleting the student and Device association
        await Studentdevice.findOneAndDelete({ Student_id, Device_id });

        res.status(200).json({ message: "Student Device association deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getStudentdevicesByStudentId = async (req, res) => {
    try {
        const { Student_id } = req.params;
        const studentdevices = await Studentdevice.find({ Student_id });
        res.status(200).json(studentdevices);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getStudentdevicesByDeviceId = async (req, res) => {
    try {
        const { Device_id } = req.params;
        const studentdevices = await Studentdevice.find({ Device_id });
        res.status(200).json(studentdevices);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


module.exports = { createStudentdevice, getStudentdevice, deleteStudentdevice, getStudentdevicesByStudentId, getStudentdevicesByDeviceId };


