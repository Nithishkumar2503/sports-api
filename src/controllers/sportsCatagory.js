import { fetchAllSportsCatagory } from "../models/sportsCatagory.js";
export const getAllSportsCatagory=async (req,res,next)=>{
    try {
        console.log("Request : ",req.baseUrl)
        const catagory=await fetchAllSportsCatagory()
        res.json(catagory)
    } catch (err) {
        next(err)
    }
}