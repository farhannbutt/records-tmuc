// routes
const express = require("express");
const router = express.Router();
const departments = require("../controllers/department-c");

router.route('/').post(departments.createDepartment);
router.route('/:department_id').get(departments.getDepartmentById);
router.route('/:department_id').delete(departments.deleteDepartmentById);
router.route('/').get(departments.getDepartments);

module.exports = router;
