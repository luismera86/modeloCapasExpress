import { userModel } from "../dao/models/user.model";
import { userDTO } from "../dto/user.dto";

const getAllUsers = async () => {
  // filtramos los usuarios con su dto
  const users = await userModel.find();
  const usersDTO = users.map((user) => {
    userDTO(user);
  });
    
  return usersDTO; 
};

const getUserById = async (id) => {
  // filtramos el usuario con su dto
  const user = await userModel.findById(id);
  return userDTO(user);
};

const postUser = async (user) => {
  const newUser = userModel.create(user);
  return userDTO(newUser);
};

const putUser = async (id, user) => {
  return await userModel.findByIdAndUpdate(id, user);
};

const deleteUser = async (id) => {
  return await userModel.findByIdAndDelete(id);
};

export { getAllUsers, getUserById, postUser, putUser, deleteUser };
