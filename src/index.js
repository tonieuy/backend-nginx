import express from "express";
import cors from "cors";
import userRoute from "../routes/userRoute.js"


const PORT = 2001;
// const HOTS = "172.16.2.143";

const app = express();
app.use(cors());
app.use(express.json());

app.use(userRoute);

app.listen(PORT, ()=> console.log(`server running on port ${PORT}`));