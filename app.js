const express = require("express");

const app = express();
const path = require("path");

app.get("/",(req,res)=>{
   res.sendFile(path.join(__dirname + "/Index.html"))
});

app.listen(3000,() => {
    console.log("server runing on port", 3000);
});