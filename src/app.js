import express from "express";
import { erroHandler } from "./middlewares/errorhandler.js";
import userRoute from "./routes/user.routes.js"
import catagoryRouter from "./routes/catagory.routes.js";

const app = express()

app.use(express.json())
app.use('/api/users', userRoute)
app.use('/api/sports-catagory', catagoryRouter)
//Error handling
app.use(erroHandler)

export default app;
