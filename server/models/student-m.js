const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    ID: {
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
    Name: {
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
    }
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
