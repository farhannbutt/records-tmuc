const mongoose  = require("mongoose")
const studentcourseSchema = new mongoose.Schema({
    Student_id:{
        type: Number,
        required: true,
    },
    Course_id:{
        type: Number,
        requires: true,
    }
})
const studentscourse = new mongoose.model("studentscourse", studentcourseSchema)
module.exports = studentscourse;