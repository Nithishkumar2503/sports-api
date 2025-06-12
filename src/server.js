import app from "./app.js";
import dotenv from "dotenv";
import pool from "./config/db.js";
dotenv.config()

const PORT=process.env.PORT ||3000


app.listen(PORT,async ()=>{
  console.info("The server is running on port : "+PORT)
})