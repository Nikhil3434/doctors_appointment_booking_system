import express from "express";
import cors from 'cors'
import 'dotenv/config'
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";

// app config

const app = express()
const port = process.env.PORT  || 4000
connectDB()
connectCloudinary()

// middleware
app.use(express.json())
app.use(cors())

// api end point

app.use('/api/admin',adminRouter)
// local host pirt 400/api/admin

app.get('/',(req,res)=>{
   res.send('API WORKING GREAT')

})
app.listen(port, ()=> console.log("server started",port))