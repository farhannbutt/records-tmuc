const mongoose  = require("mongoose")
const studentdeviceSchema = new mongoose.Schema({
    Student_id:{
        type: Number,
        required: true,
    },
    Device_id:{
        type: Number,
        requires: true,
    }
})
const studentsdevice = new mongoose.model("studentsdevice", studentdeviceSchema)
module.exports = studentsdevice;