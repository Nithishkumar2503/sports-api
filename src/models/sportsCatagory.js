import db from "../config/db.js";

export const fetchAllSportsCatagory=async ()=>{
    const result=await db.query(`SELECT * FROM  sportscatagory;`)
    return result.rows||[]
}