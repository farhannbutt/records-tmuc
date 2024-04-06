//staff router
const express = require("express");
const router = express.Router(); 
const {enterInRoom } = require('../controllers/simulator-c');

router.route('/enter-in-room').post(enterInRoom);

module.exports = router;
 