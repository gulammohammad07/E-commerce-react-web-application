import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";
import bannerRoutes from "./routes/bannerRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

dotenv.config({
  path: new URL(".env", import.meta.url),
});

const app = express();

const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:5173";

// Middleware
app.use(cors({
  origin: CLIENT_URL,
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//product routes
app.use("/products", productRoutes);

app.use("/banners", bannerRoutes);

app.use("/categories", categoryRoutes);

// cart
app.use("/cart", cartRoutes);

// auth
app.use("/auth", authRoutes);

// orders
app.use("/orders", orderRoutes);

// Home Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Server is running successfully ",
  });
});


export default app;
