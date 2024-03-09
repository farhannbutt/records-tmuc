const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
    Room_id: {
        type: Number,
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    Floor_id: {
        type: String,
        required: true
    }
});

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;
