import { fetchAllTeams,addTeamInDb } from "../models/team.js"

export const getAllTeams = async (req, res, next) => {
    try {
        const teams = await fetchAllTeams()
        res.json(teams)
    } catch (err) {
        next(err)
    }
}


export const addTean = async (req, res, next) => {
    try {
        const teams = await addTeamInDb(req)
        res.json(teams)
    } catch (err) {
        next(err)
    }
}
