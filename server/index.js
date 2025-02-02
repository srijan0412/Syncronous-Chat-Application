import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const port = process.env.PORT || 4001;
const databaseURL = process.env.DATABASE_URL;

app.use(cors({
    origin: [process.env.ORIGIN],
    methods: ["GET", "PORT", "PUT", "PUT", "PATCH", "DELETE"],
    credentials:true,
}));

app.use(cookieParser());
app.use(express.json());

const server = app.listen(port, ()=> {
    console.log(`Server is Running at http://localhost:${port}`);
});

mongoose.connect(databaseURL)
    .then(() => console.log("Database is successfully Connected!"))
    .catch((err) => {
        console.log("Error during connecting to the Database");
        console.log(err.message);
    });