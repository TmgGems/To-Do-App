const express = require("express");
const router = express.Router();
const todoController = require("./todo.controller");

router.get("/",(req,res)=>{
    res.send("Hello From todo");
});

router.post("/",async(req,res)=>{
    const todoResult = await todoController.create(req.body);
    res.json({data:todoResult});
});

module.exports = router;