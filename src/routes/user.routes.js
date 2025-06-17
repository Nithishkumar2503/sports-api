import express from "express";
import { getUsers,addUsers,updateUserById,removUser } from "../controllers/user.controllers.js";
const router=express.Router();
router.get("/",getUsers)
router.post("/",addUsers)
router.put("/:id",updateUserById)
router.delete("/:id",removUser)

export default router