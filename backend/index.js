import express from "express";
import db from "./config/database.js"
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();
import merchantRouter from "./routes/merchantRouter.js";
import productRouter from "./routes/productRouter.js";
import cors from 'cors'

const app = express();



app.use(cors({credentials:true, origin:"http://localhost:3000"}))
app.use (cookieParser());
app.use (express.json());
app.use (merchantRouter);
app.use (productRouter)
try {
  await db.authenticate();
  console.log("Database connected...");
 
} catch (error) {
  console.error(error);
};


app.use (cookieParser());
app.use (express.json());
app.use (merchantRouter);
app.use (productRouter)

app.listen(8000, () => console.log("Server running..."));



//TO CREATE MERCHANT TABEL, Acivate them one by one and unactivate the again one by one after you use the code

// import merchants from "./model/merchantmodel.js";

// app.use(merchants.sync())

//TO CREATE PRODUCT TABEL

// import products from "./model/productsmodel.js";

// app.use(products.sync())