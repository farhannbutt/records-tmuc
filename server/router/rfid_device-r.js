//course router
const express = require("express");
const router = express.Router();
const devices = require("../controllers/rfid_device-c");
router.route('/').post(devices.createrfid_id)
router.route('/:id').put(devices.updaterfid_id);   
router.route('/').get(devices.getrfid_id);              
router.route('/:id').delete(devices.deleterfid_id); 
router.route('/:id').get(devices.getrfidById);


module.exports = router;