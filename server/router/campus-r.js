const express = require("express");
const router = express.Router();
const campus = require("../controllers/campus-c");

router.route('/').post(campus.createCampus);
router.route('/:campus_id').get(campus.getCampusById);
router.route('/:campus_id').delete(campus.deleteCampusById);
router.route('/').get(campus.getCampuses);

module.exports = router;
