const express = require("express");
const router = express.Router(); 

const campus = require("../controllers/campus-c");

router.route('/').post(campus)

module.exports = router;
 