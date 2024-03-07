const mongoose = require("mongoose");

const campusSchema = new mongoose.Schema({
    Campus_id: {
        type: Number,
        required: true
    },
    Campus_manager: {
        type: String,
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    Location: {
        type: String,
        required: true
    },
    Contact_number: {
        type: Number,
        required: true
    },

});

const Campus = mongoose.model("Campus", campusSchema);

module.exports = Campus;
