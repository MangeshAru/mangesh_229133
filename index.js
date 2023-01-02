const express=require("express");
const path=require("path");
const app = express();
const p = path.join(__dirname,)

app.get("/",(req,res)=>{
    res.send(path.join(__dirname , "./iacsd.html"));
});
app.listen("3000",()=>{
    console.log("connection successful");
});