const express = require("express");
require('dotenv').config();
const app = express();
const cors = require("cors")
const studentrouter = require("./router/students-r");
const campusrouter = require("./router/campus-r");
const courserouter = require("./router/courses-r");
const programrouter = require("./router/program-r");
const floorrouter = require("./router/floor-r");
const departmentrouter = require("./router/department-r");
const rfidrouter = require("./router/rfid_device-r");
const studentcourserouter = require("./router/studentcourse-r");
const studentdevicerouter = require("./router/studentdevice-r");
const roomrouter = require("./router/rooms-r")
const loginrouter = require("./router/login-r");
const registrationrouter = require("./router/registration-r");
const simulatorrouter = require("./router/simulator-r");
const attendancerouter = require("./router/attendance-r");



// connecting to db
const connectDb = require("./utils/db");
//allowing front end to pass backend
const corsOption = {
    origin: "http://localhost:3000",
    methods: "GET, POST, DELETE, PATCH, HEAD",
    credentials: true,

}
app.use(cors(corsOption));
app.use(express.json())
// middleware for the fields
app.use("/api/students", studentrouter);
app.use("/api/campus", campusrouter);
app.use("/api/course", courserouter);
app.use("/api/program", programrouter);
app.use("/api/floor", floorrouter);
app.use("/api/department", departmentrouter);
app.use("/api/rfid-device", rfidrouter);
app.use("/api/studentcourse", studentcourserouter);
app.use("/api/studentdevice", studentdevicerouter);
app.use("/api/rooms", roomrouter);
app.use("/api/login", loginrouter);
app.use("/api/registration", registrationrouter);
app.use("/api/simulator", simulatorrouter);
app.use("/api/attendance-report", attendancerouter);

const PORT = 5000;
connectDb().then( () =>{
app.listen(PORT, () => {

    console.log(`server is running at port ${PORT}`);
});
})

module.exports = app;
