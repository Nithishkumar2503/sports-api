import express from "express";
import { getAllSportsCatagory } from "../controllers/sportsCatagory.js";

const catagoryRouter = express.Router()
catagoryRouter.get('/', getAllSportsCatagory)

export default catagoryRouter