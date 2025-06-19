import express from "express";
import { getAllSportsCatagory } from "../controllers/request.js";

const requestRouter=express.Router()

requestRouter.use('/',getAllSportsCatagory)


export default requestRouter