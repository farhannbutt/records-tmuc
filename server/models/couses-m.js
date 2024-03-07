const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    Course_id: {
        type: Number,
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    Credits: {
        type: Number,
        required: true
    },
    Program: {
        type: String,
        required: true
    }
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
