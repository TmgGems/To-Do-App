const Subtaskmodel = require("./subtask.model");

//CRUD

const create = (payload) =>{
    return Subtaskmodel.create(payload);
};

const List =() =>{};

const getById = (id) =>{};

const updateById = (id,payload)=>{};

const remove = (id)=>{};

module.exports={create,List,getById,updateById,remove};