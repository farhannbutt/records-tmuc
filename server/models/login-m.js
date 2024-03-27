const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const loginSchema = new mongoose.Schema({
   UserName: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },

});
 //Defining the generateToken method
loginSchema.methods.generateToken = function() {
    try {
        return jwt.sign({
            userId: this._id.toString(),
            UserName: this.UserName
        },
        process.env.JWT_SECRET, 
        {
            expiresIn: "30 days" // Example expiration time
        });
    } catch (error) {
        console.error(error);
        throw new Error("Error generating token");
    }
};

const Login = mongoose.model("Login", loginSchema)

module.exports = Login;
