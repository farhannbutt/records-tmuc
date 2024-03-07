//staff router
const express = require("express");
const router = express.Router(); 
const staff = require('../controllers/staff-c');

router.route('/').post(staff)

module.exports = router;
 