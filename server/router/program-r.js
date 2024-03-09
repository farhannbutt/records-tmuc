//Router
const express = require("express");
const router = express.Router();
const programs = require("../controllers/program-c");

router.route('/').post(programs.createProgram);
router.route('/:program_id').get(programs.getProgramById);
router.route('/:program_id').delete(programs.deleteProgramById);
router.route('/').get(programs.getPrograms);

module.exports = router;
