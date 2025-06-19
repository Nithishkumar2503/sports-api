import db from "../config/db.js";

export async function fetchAllRequest(){
    const result=await db.query('SELECT * FROM requests;')
    return result.rows
}