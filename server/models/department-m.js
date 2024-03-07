const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema({
    Department_id: {
        type: Number,
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    ContactNumber: {
        type: Number,
        required: true
    },
    Program: {
        type: String,
        required: true
    }
});

const Department = mongoose.model("Department", departmentSchema);

module.exports = Department;