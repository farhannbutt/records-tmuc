const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
    RoomID: {
        type: Number,
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    FloorName: {
        type: String,
        required: true
    }
});

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;
