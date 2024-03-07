const express = require("express");
const app = express();
const studentrouter = require("./router/students-r");
const campusrouter = require("./router/campus-r");


// connecting to db
const connectDb = require("./utils/db")
app.use(express.json())
// middleware for the fields
app.use("/api/students", studentrouter);
app.use("/api/campus", campusrouter);



const PORT = 5000;
connectDb().then( () =>{
app.listen(PORT, () => {

    console.log(`server is running at port ${PORT}`);
});
})