const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const RegistrationSchema = new mongoose.Schema({ 
    UserName: { 
        type: String,
        required: true
    }, 
    Email: { 
        type: String,
        required: true
    }, 
    Phone: {
        type: Number,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
});

// Define the generateToken method
RegistrationSchema.methods.generateToken = function() {
    try {
        return jwt.sign({
            userId: this._id.toString(),
            Email: this.Email
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

const Registration = mongoose.model("Registration", RegistrationSchema);

module.exports = Registration;
