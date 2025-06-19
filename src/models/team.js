import db from "../config/db.js";

export const fetchAllTeams = async () => {
    const result=await db.query('SELECT * FROM teams;')
    return result.rows
}



export const addTeamInDb = async (req) => {
    console.log("req : ",req.body)
    const {
        tableName,sportsType,description,photoUrl,
        photoId,phoneNumber,alternativeNumber,latitude,longitude,pincode
    }=req.body
    const result = await db.query(
    'INSERT INTO teams (tbal, phone) VALUES ($1, $2) RETURNING *',
    [tableName, phoneNumber,latitude,latitude,longitude,photoId,alternativeNumber,pincode]
  );
    return result.rows
}