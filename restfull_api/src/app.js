const express = require("express");
require("./db/conn");

//after using router we denote this file in router we do not need this file here
// const Student = require("./models/students"); 

// require router
const StudentRouter = require("./routers/student");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(StudentRouter);

// Server
app.listen(port,()=>{
    console.log(`Your connection is in port no. ${port}`);
})



