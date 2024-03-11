const express = require("express");
const router = express.Router();
const studentcourseController = require("../controllers/studentcourse-c");

router.route("/").post(studentcourseController.createStudentcourse);
router.route("/").get(studentcourseController.getStudentcourse);
router.route("/").delete(studentcourseController.deleteStudentcourse);
router.route("/by-student-id/:Student_id").get(studentcourseController.getStudentcoursesByStudentId);
router.route("/by-course-id/:Course_id").get(studentcourseController.getStudentcoursesByCourseId);

module.exports = router;
