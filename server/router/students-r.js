const express = require("express");
const router = express.Router(); 
const students = require('../controllers/students-c');

router.route('/').post(students)

module.exports = router;
 