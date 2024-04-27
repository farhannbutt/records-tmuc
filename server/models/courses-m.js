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
    },
    Room_id: {
        type: String,
        required: false
    },
    Start_time: {
        type:Number,
        required:false
    },
    End_time: {
        type:Number,
        required:false
    }
});
const Course = mongoose.model("Course", courseSchema);
module.exports = Course;
