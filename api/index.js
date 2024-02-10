import mongoose from "mongoose";
import express from "express";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";

const app = express();

app.use(express.json());

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