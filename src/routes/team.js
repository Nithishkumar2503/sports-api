import express from "express";
import { getAllTeams,addTean } from "../controllers/team.js";

const teamsRouter = express.Router()

teamsRouter.get('/', getAllTeams)
teamsRouter.post('/', addTean)


export default teamsRouter