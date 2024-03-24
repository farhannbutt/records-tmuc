//login router
const express = require("express");
const router = express.Router(); 
const { createLogin } = require("../controllers/login-c");
// const { getLogins } = require("../controllers/login-c");

router.route('/')
    .post(createLogin)
    // .get(getLogins);

module.exports = router;
       


