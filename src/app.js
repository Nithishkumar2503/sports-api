import express from "express";
import { erroHandler} from "./middlewares/errorhandler.js";
import userRoute from "./routes/user.routes.js"

const app=express()

app.use(express.json())
app.use('/api/users',userRoute)

//Error handling
app.use(erroHandler)

export default app;
