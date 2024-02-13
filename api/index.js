import mongoose from "mongoose";
import express from "express";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import cors from "cors";
const app = express();

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