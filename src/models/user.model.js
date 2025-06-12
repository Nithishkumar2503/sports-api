import db from "../config/db.js";

export const getAllUsers=async ()=>{
  const result=await db.query('SELECT * FROM users;');
  return result.rows
}
export const createUser = async (name, phone) => {
  const result = await db.query(
    `INSERT INTO users (name, phone) VALUES ($1, $2) RETURNING *`,
    [name, phone]
  );

  return result.rows[0]; // This contains id, name, phone
};