const AttendanceReport = require('../models/Attendance-report');
const Course = require('../models/courses-m');

// Get all attendnace
const getAttendance = async (req, res) => {
    try {
        // attendance
        const attendance = await AttendanceReport.find();
        res.status(200).json(attendance);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { getAttendance };
