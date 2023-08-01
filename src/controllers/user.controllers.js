import { deleteUser, getAllUsers, getUserById, postUser, putUser } from "../services/user.services";
import { logger } from "../utils/logger";

const getAllUsersController = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    logger.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

const getUserByIdController = async (req, res) => {
  try {
    const user = await getUserById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    logger.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

const postUserController = async (req, res) => {
  try {
    const user = await postUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    logger.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

const putUserController = async (req, res) => {
  try {
    const user = await putUser(req.params.id, req.body);
    res.status(200).json(user);
  } catch (error) {
    logger.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

const deleteUserController = async (req, res) => {
  try {
    const user = await deleteUser(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    logger.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

export { getAllUsersController, getUserByIdController, postUserController, putUserController, deleteUserController };
