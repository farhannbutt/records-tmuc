const Login = require('../models/login-m'); 

// Create login
const createLogin = async (req, res) => {
    try {
        const { UserName, Password } = req.body;

        // Checking if the UserName already exists
        const loginExists = await Login.findOne({ UserName });

        if (loginExists) {
            return res.status(400).json({ message: "Username already exists" });
        }

        // Adding data for login
        const newLogin = await Login.create({
            UserName,
            Password
        });

        res.status(201).json(newLogin);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Get all logins
const getLogins = async (req, res) => {
    try {
        // Get all logins
        const allLogins = await Login.find();

        res.status(200).json(allLogins);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    createLogin,
    getLogins
};
