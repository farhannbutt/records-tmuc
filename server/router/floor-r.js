// floor router
const express = require("express");
const router = express.Router();
const floors = require("../controllers/floor-c");

router.route('/').post(floors.createFloor);
router.route('/:Floor_id').get(floors.getFloorById);
router.route('/:Floor_id').delete(floors.deleteFloorById);              
router.route('/').get(floors.getFloors);

module.exports = router;
