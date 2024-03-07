//course router
const express = require("express");
const router = express.Router(); 
const floor = require("../controllers/floor-c");

router.route('/').post(floor)

module.exports = router;
 