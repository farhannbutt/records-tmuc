//course router
const express = require("express");
const router = express.Router(); 
const program = require("../controllers/program-c");

router.route('/').post(program)

module.exports = router;