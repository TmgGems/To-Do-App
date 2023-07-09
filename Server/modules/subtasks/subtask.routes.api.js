const express = require("express");
const router = express.Router();
const subtaskController = require("./subtask.controller");

router.get("/",(req,res)=>{
    res.send("Subtask is Running");
})

router.post("/",async(req,res)=>{
    const result = await subtaskController.create(req.body);
    res.json({data:result});
})

module.exports = router;