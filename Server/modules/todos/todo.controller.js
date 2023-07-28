const TodoModel = require("./todo.model");

//CRUD

const create = (payload) =>{
    return TodoModel.create(payload);
};

const List =() =>{
    //Complex aggregation
    return TodoModel.aggregate([
        {
          '$lookup': {
            'from': 'subtasks', 
            'localField': '_id', 
            'foreignField': 'todo_id', 
            'as': 'result'
          }
        }
      ]);
};

const getById = (id) =>{
    return TodoModel.findOne({_id:id});
};

const updateById = (id,payload)=>{
    return TodoModel.updateOne({_id:id},payload);
};

const remove = (id)=>{
    return TodoModel.deleteOne({_id:id});
};

module.exports={create,List,getById,updateById,remove};