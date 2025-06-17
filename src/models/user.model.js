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


export const updateUser = async (id,name, phone) => {
  const result = await db.query(
    `UPDATE users SET name=$2,phone=$3 WHERE id=$1 RETURNING *`,
    [id,name, phone]
  );
  return result.rows[0]; // This contains id, name, phone
};


export const deleteUser = async (id) => {
  const result = await db.query(
    `DELETE FROM users WHERE id=$1 RETURNING *`,[id]
  );
  return result.rows[0]; // This contains id, name, phone
};