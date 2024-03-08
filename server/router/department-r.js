//course router
const express = require("express");
const router = express.Router(); 
const department = require("../controllers/department-c");

router.route('/').post(department)

module.exports = router;
 