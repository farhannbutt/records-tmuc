const mongoose = require("mongoose");

const programSchema = new mongoose.Schema({
    Program_id: {
        type: Number,
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    AwardingBody: {
        type: String,
        required: true
    },
    Courses: {
        type: String,
        required: true
    }
});

const Program = mongoose.model("Program", programSchema);

module.exports = Program;


module.exports = Program;
