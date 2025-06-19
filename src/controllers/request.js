import { fetchAllRequest } from "../models/request.js";

export const getAllSportsCatagory=async (req,res,next)=>{
    try {
        const result=await fetchAllRequest()
        res.json(result)
    } catch (err) {
        next(err)
    }
}