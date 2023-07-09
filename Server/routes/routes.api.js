const express = require("express");
const router = express.Router();

const todoRouter =require("../modules/todos/todo.routes.api");
const subtaskRouter=require("../modules/subtasks/subtask.routes.api");

router.get("/",(req,res)=>{
    res.json({msg:"Routes Api"});
});

router.use("/todos",todoRouter);
router.use("/subtasks",subtaskRouter);

module.exports = router;