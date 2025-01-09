import express from "express";
import { config } from "dotenv";
import router from "./routes/route.js";
import cors from "cors"
const app = express();
config()
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true})); 
app.use(router);

export default app;
