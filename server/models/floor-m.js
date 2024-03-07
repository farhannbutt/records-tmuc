const mongoose = require("mongoose");

const floorSchema = new mongoose.Schema({
    Floor_id: {
        type: Number,
        required: true
    },
    Department_id: {
        type: Number,
        required: true
    },
    Floor_number: {
        type: Number,
        required: true
    }
});

const Floor = mongoose.model("Floor", floorSchema);

module.exports = Floor;
