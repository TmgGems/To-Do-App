const TodoModel = require("./todo.model");

//CRUD

const create = (payload) =>{
    return TodoModel.create(payload);
};

const List =() =>{
    return TodoModel.find();
};

const getById = (id) =>{};

const updateById = (id,payload)=>{};

const remove = (id)=>{};

module.exports={create,List,getById,updateById,remove};