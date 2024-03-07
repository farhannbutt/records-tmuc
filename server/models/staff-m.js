const mongoose = require("mongoose");

const staffSchema = new mongoose.Schema({
    Staff_id: {
        type: Number,
        required: true
    },
    Department_id: {
        type: Number,
        required: true
    },
    Campus_id: {
        type: Number,
        required: true
    },
    Email: {
        type: String,
        required: true
    }, Name: {
        type: String,
        required: true
    },
     Designation: {
     type: String,
     required: true
    }, 
    Phone: {
        type: Number,
        required: true
    }
    
});

const Staff = mongoose.model("Staff", staffSchema);

module.exports = Staff;
