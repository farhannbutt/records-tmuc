const Registration = require('../models/Registration-m');
const jwt = require("jsonwebtoken");

// Create Registration
const createRegistration = async (req, res) => {
    try {
        const { UserName, Password, Email, Phone } = req.body;

        // Checking if the Email already exists
        const registrationExists = await Registration.findOne({ Email });

        if (registrationExists) {
            return res.status(400).json({ message: "Email already exists" });
        }

        const newRegistration = await Registration.create({
            UserName,
            Password: Password,
            Email,
            Phone
        });

        res.status(201).json({ newRegistration, token: await newRegistration.generateToken(), 
        userId: newRegistration._id.toString() });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error over here' });
    }
};

// Get all Registrations
const getRegistration = async (req, res) =>  {
    try {
        // Get all Registrations
        const allRegistration = await Registration.find();

        res.status(200).json(allRegistration);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    createRegistration,
    getRegistration
};
