const express = require("express");
const router = express.Router();
const studentdeviceController = require("../controllers/studentdevice-c");

router.route("/").post(studentdeviceController.createStudentdevice);
router.route("/").get(studentdeviceController.getStudentdevice);
router.route("/").delete(studentdeviceController.deleteStudentdevice);
router.route("/by-student-id/:Student_id").get(studentdeviceController.getStudentdevicesByStudentId);
router.route("/by-device-id/:Device_id").get(studentdeviceController.getStudentdevicesByDeviceId);

module.exports = router;
