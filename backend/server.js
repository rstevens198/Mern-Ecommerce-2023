import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productsRoutes from "./routes/productRoutes.js";
dotenv.config();
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/products", productsRoutes);

app.listen(port, () => console.log(`Server is running on port ${port}`));
