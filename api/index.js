import mongoose from "mongoose";
import express from "express";

const app = express();

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