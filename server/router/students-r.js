const express = require("express");
const router = express.Router(); 
const {getStudents, createStudent, getStudentById,updateStudentById,deleteStudentById,} = require('../controllers/students-c');

router.route('/').post(createStudent);
router.route('/:Student_id').get(getStudentById);
router.route('/:Student_id').put(updateStudentById);
router.route('/:Student_id').delete(deleteStudentById);
router.route('/').get(getStudents);

module.exports = router;
 