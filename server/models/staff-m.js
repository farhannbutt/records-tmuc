const mongoose = require("mongoose");

const staffSchema = new mongoose.Schema({
    staff_id: {
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
    Contact_number: {
        type: Number,
        required: false
    }
    
});

const Staff = mongoose.model("Staff", staffSchema);

module.exports = Staff;
