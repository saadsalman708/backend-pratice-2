import "dotenv/config";

import express from "express";
import connectDB from "./config/db.js";
import router from "./routes/user.routes.js";

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(express.json());

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
