const express = require("express");
const app = express();
const router = require("./router/students-r");
const connectDb = require("./utils/db")
app.use(express.json())

app.use("/api/students", router);

const PORT = 5000;
connectDb().then( () =>{
app.listen(PORT, () => {

    console.log(`server is running at port ${PORT}`);
});
})