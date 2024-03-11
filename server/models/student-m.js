const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    Student_id: {
        type: Number,
        required: true
    },
    Department_id: {
        type: Number,
        required: false
    },
    Campus_id: {
        type: Number,
        required: false
    },
    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    contact_number: {
        type: Number,
        required: true
    },
    rfid: {
        type: String,
        required: false
    }
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
