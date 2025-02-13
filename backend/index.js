//building the server

import express from"express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import Connectdb from "./utils/db.js";
import router from "./routes/route.js";
import companyRouter from "./routes/company-route.js"
import jobRoute from "./routes/job-route.js"
import applicationRoute from "./routes/application-route,js";

dotenv.config({})

const corOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
}

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(cors(corOptions));

app.use("/api/v1/user", router);
app.use("/api/v1/company", companyRouter);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/applications", applicationRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    Connectdb();
    console.log(`Server running at port: ${PORT}`)
})