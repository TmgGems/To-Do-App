const mongoose = require("mongosse");

const ObjectId = mongoose.Schema.Types;

const subTaskSchema = mongoose.Schema({
    title:{type:String,required:true},
    status:{type:String,enums:["pending","complete"],default:"pending"},
    todo_id:{type:ObjectId,ref:"Todo"},//reference to Todo mode
});

module.exports = mongoose.model("Subtask",subtaskSchema);