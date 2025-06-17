import { createUser, getAllUsers,deleteUser,updateUser } from '../models/user.model.js';

export const getUsers = async (req, res, next) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (err) {
    next(err);
  }
};

export const addUsers = async (req, res, next) => {
  try {
    const { name, phone } = req.body;
    const newUser = await createUser(name, phone);
    res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
};


export const updateUserById = async (req, res, next) => {
  try {
    const { name, phone } = req.body;
    const newUser = await updateUser(req.params.id,name, phone);
    res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
};

export const removUser = async (req, res) => {
  try {
    const user = await deleteUser(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json({ message: "User deleted successfully! "});
  } catch (error) {
    res.status(500).json({ error: "Failed to delete user" });
  }
};

