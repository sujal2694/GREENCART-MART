import e from "express";
import cors from "cors";
import 'dotenv/config'
import { userRouter } from "./routes/userRoute.js";
import { connectDB } from "./config/db.js";

const app = e();

app.use(cors());
app.use(e.json());

//connect database
connectDB();

//api endpoints
app.use("/api/user", userRouter)



app.get('/', (req,res)=>{
    res.send("Server is live...")
})

const PORT = process.env.PORT;
app.listen(PORT, (req,res)=>{
    console.log("Server is running on port 5000",`http://localhost:${PORT}`);
})