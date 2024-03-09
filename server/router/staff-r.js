//staff router
const express = require("express");
const router = express.Router(); 
const {creatstaff, getstaffByid, getstaff, updatestaffById, deletestaffById } = require('../controllers/staff-c');

router.route('/').post(creatstaff);
router.route('/:staff_id').get(getstaffByid);
router.route('/').get(getstaff);
router.route('/:staff_id').put(updatestaffById);         
router.route('/:staff_id').delete(deletestaffById);            


module.exports = router;
 