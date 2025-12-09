import dotenv from "dotenv";
dotenv.config();
import connection from "./db.js";
import express from 'express';
const app = express();
const PORT = 3001;
import { middlware } from "./middleware/url.js";


connection(process.env.DATABASE_URL);

middlware(app);


app.listen(PORT, () => console.log("server is running!"));