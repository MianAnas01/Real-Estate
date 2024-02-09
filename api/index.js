import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from './routes/user.route.js';
 
dotenv.config();
 mongoose.connect(process.env.MONGO_STRING)
  .then(() => {
    console.log('Connected to MongoDB!');
  })
.catch((err) => {
  console.log(err);
});
const app = express();  
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
// import express from "express";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// dotenv.config();
// const startServer = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_STRING);
//     console.log('Connected to MongoDB!');
//     const app = express();  
//     app.listen(3000, () => {
//       console.log("Server is running on port 3000");
//     });
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//   }
// };
// export default startServer();

app.use("/api/user ", userRouter);