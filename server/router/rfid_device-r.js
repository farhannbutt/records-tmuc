//course router
const express = require("express");
const router = express.Router();
const devices = require("../controllers/rfid_device-c");
router.route('/').post(devices)


module.exports = router;