import { createUser, getAllUsers } from '../models/user.model.js';

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
    const { id,name, phone } = req.body;
    const newUser = await createUser(id,name, phone);
    res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
};
