const express = require("express");
const router = express.Router();
const attendance = require("../controllers/attendance-c");


router.route('/').get(attendance.getAttendance);

module.exports = router;