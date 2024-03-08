const express = require("express");
const app = express();
const studentrouter = require("./router/students-r");
const campusrouter = require("./router/campus-r");
const staffrouter = require("./router/staff-r");
const courserouter = require("./router/courses-r");
const programrouter = require("./router/program-r");
const floorrouter = require("./router/floor-r");
const departmentrouter = require("./router/department-r");
const rfidrouter = require("./router/rfid_device-r");


// connecting to db
const connectDb = require("./utils/db");
app.use(express.json())
// middleware for the fields
app.use("/api/students", studentrouter);
app.use("/api/campus", campusrouter);
app.use("/api/staff", staffrouter);
app.use("/api/course", courserouter);
app.use("/api/program", programrouter);
app.use("/api/floor", floorrouter);
app.use("/api/department", departmentrouter);
app.use("/api/rfid-device", rfidrouter);






const PORT = 5000;
connectDb().then( () =>{
app.listen(PORT, () => {

    console.log(`server is running at port ${PORT}`);
});
})