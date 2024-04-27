const mongoose = require("mongoose");

const attendanceReportSchema = new mongoose.Schema({
    Student_id: {
        type: Number,
        required: true
    },
    Student_name: {
        type: String,
        required : true
    },
    Course_id: {
        type: Number,
        required: true
    },
    Course_name: {
        type: String,
        required : true
    },
    CheckInTime: {
        type: String,
        required: false
    },
    CheckOutTime: {
        type: String,
        required: false
    }
   
});

const AttendanceReport = mongoose.model("AttendanceReport", attendanceReportSchema);

module.exports = AttendanceReport;
