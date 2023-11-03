// usersController.js
const {User} = require('../models')

//get users
 const getUsers = async(req, res) => {
    try{
      const users = await User.find({});
      res.status(200).json(users);
    }catch(error){
      res.status(500);
      throw new Error(error.message);
    }

  };

//get user by id
  const getUserById = async(req, res) => {
    try{
      const{id} = req.params;
      const user = await User.findById(id);
      res.status(200).json(user)

    }catch(error){

    }
  
  };


//create user

const createUser = async(req, res) => {
    try{

      const user = await User.create(req.body)
      res.status(200).json(user)
    }catch(error){
      res.status(500);
      throw new Error(error.message);
    }

  };

//delete user
const deleteUser = async(req, res) => {
  try{
    const {id} = req.params;
    const user = await User.findByIdAndDelete(id)
    if (!user){
      res.status(404);
      throw new Error(`can not find any user with id ${id}`);
    }
    res.status(200).json(user);
  }catch(error){
    res.status(500);
    throw new Error(error.message)
  }
  };

//update user

const updateUser = async(req, res) => {
  try{
    const {id} = req.params;
    const user = await User.findByIdAndUpdate(id,req.body);
    if (!user){
      res.status(404);
      throw new Error(`can not find any user with id ${id}`);
    }
    const updatedUser = await User.findById(id);
    res.status(200).json(updatedUser);
  }catch(error){
      res.status(500);
      throw new Error(error.message);
  }
}




 const errorHandler =  async(error, req, res) => {
    //res.send("Error in backend")
    throw new Error('An internal error occured')
};

 module.exports = {updateUser, getUsers, getUserById, createUser, deleteUser, errorHandler};
