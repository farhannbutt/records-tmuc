const express = require("express");
const router = express.Router(); 
const students = require('../controllers/campus-c');
const campus = require("../controllers/campus-c");

router.route('/').post(campus)

module.exports = router;
 