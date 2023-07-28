const Subtaskmodel = require("./subtask.model");

//CRUD

const create = (payload) =>{
    return Subtaskmodel.create(payload);
};

const List =() =>{
    //Complex aggregation
    return Subtaskmodel.find();
};

const getById = (id) =>{
    return Subtaskmodel.findOne({_id:id});
};

const updateById = (id,payload)=>{
    return Subtaskmodel.updateOne({_id:id},payload);
};

const remove = (id)=>{
    return Subtaskmodel.deleteOne({_id:id});
};

module.exports={create,List,getById,updateById,remove};