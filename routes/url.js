const mongoose =require("mongoose")
const express= require("express")
const router =express.Router()

const {urlhander,geturlfromshortID,analyticsforshortID}=require("../controllers/urlcut")

router.post("/url",urlhander)
router.get("/url/:id",geturlfromshortID)
router.get("/url/analytics/:id",analyticsforshortID)
module.exports=router
