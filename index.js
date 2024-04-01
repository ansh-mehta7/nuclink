const express =require('express')
const app=express()
require("dotenv").config();
const PORT=process.env.PORT|| 8001
const urlrouter= require("./routes/url")

app.use(express.json())


app.get("/",(req,res)=>{
    res.send("this is the homepage ")
 
})
app.use("/",urlrouter)
const dbConnection=require('./config/dbConnection')
dbConnection();

app.listen(PORT,()=>{
    console.log(`app is running successfully at port ${PORT}`)

})