const express = require("express");
const router = express.Router(); 
const {createStudent, getStudents} = require('../controllers/students-c');

router.route('/').post(createStudent)
router.route('/').get(getStudents)

module.exports = router;
 