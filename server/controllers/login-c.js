const Login = require('../models/login-m'); 
const Registration = require('../models/Registration-m'); 

const jwt = require("jsonwebtoken");


const createLogin = async (req, res) => {
    try {
        const { UserName, Password } = req.body;

        // Checking if the UserName already exists
        const loginExists = await Registration.findOne({ UserName });
        console.log(loginExists)

        if (!loginExists) {
            return res.status(400).json({ message: "Username does not exist" });
        }

        // Adding data for login
        const newLogin = await Login.create({
            UserName,
            Password
        });

        // For now, just return the newly created login without password validation
        return res.status(200).json({ 
            newLogin, 
            token: await loginExists.generateToken(), 
            userId: loginExists._id.toString() 
        });
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
