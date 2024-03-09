const express = require("express");
const router = express.Router();
const courses = require("../controllers/courses-c");

router.route('/').post(courses.createCourse);
router.route('/:course_id').get(courses.getCourseById);
router.route('/:course_id').delete(courses.deleteCourseById);
router.route('/').get(courses.getCourses);

module.exports = router;
