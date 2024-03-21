const express = require("express");
const router = express.Router();
const rooms = require("../controllers/rooms-c");

router.route('/').post(rooms.createRoom);
router.route('/:Room_id').get(rooms.getRoomById);
router.route('/:Room_id').delete(rooms.deleteRoomById);
router.route('/').get(rooms.getRooms);

module.exports = router;
