//course router
const express = require("express");
const router = express.Router(); 
const courses = require("../controllers/courses-c");

router.route('/').post(courses)

module.exports = router;
 