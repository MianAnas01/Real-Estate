import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
// import listingRouter from './routes/listing.route.js';
import cookieParser from 'cookie-parser';
import path from 'path';
import cors from "cors";

const app = express();

app.use(cookieParser());

app.use(express.json());
app.use(cors());
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}`);

    app.on("error", (error) => {
      console.log("error", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log("App listening at port ", process.env.PORT);
    });
  } catch (error) {
    console.log("error", error);
    throw error;
  }
})();

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);


app.use((err, req, res, next) => {
const statusCode = err.statusCode || 400;
const message = err.message || "Internal Server Error";
return res.status(statusCode).json({ 
  success: false,
  statusCode,
  message });
});