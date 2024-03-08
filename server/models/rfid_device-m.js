const mongoose = require("mongoose");

const deviceSchema = new mongoose.Schema({
    ID: {
        type: Number,
        required: true
    },
    Name: {
        type: String,
        required: true
    }
});

const Device = mongoose.model("Device", deviceSchema);

module.exports = Device;