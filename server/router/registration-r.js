const express = require("express");
const router = express.Router(); 
const { createRegistration } = require("../controllers/registration-c");
const { getRegistration } = require("../controllers/registration-c");

router.route('/')
    .post(createRegistration)
    .get(getRegistration);

module.exports = router;

