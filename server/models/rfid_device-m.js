const mongoose = require("mongoose");

const deviceSchema = new mongoose.Schema({
    Device_id: {
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
