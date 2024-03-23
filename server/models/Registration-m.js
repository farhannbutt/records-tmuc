const mongoose = require("mongoose");

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

const Registration = mongoose.model("Registration", RegistrationSchema)

module.exports = Registration;
