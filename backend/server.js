//mongodb+srv://dasuniuthpala2002:VVKnKajk1LTuqs4P@cluster0.zog8jqz.mongodb.net/?
import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import path from "path"


//app config
const app = express()
const port = 4000

//middleware
app.use(express.json())
app.use(cors())
app.use('/uploads', express.static(path.join(process.cwd(), 'backend/uploads')))

//DB connection 
connectDB();

//API endpoints
app.use("/api/food", foodRouter)

app.get("/",(req,res)=> {
    res.send("API Working")
})

app.listen(port,() =>{
    console.log(`Server Started on http://localhost:${port}`)
})


