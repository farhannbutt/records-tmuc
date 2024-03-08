const express = require("express");
const router = express.Router(); 
const {getStudents, createStudent, getStudentById,updateStudentById,deleteStudentById,} = require('../controllers/students-c');

router.route('/').post(createStudent);
router.route('/:id').get(getStudentById);
router.route('/:id').put(updateStudentById);
router.route('/:id').delete(deleteStudentById);
router.route('/').get(getStudents);

module.exports = router;
 