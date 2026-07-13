import express from "express";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";
import bannerRoutes from "./routes/bannerRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";




const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//product routes
app.use("/products", productRoutes);

app.use("/banners", bannerRoutes);

app.use("/categories", categoryRoutes);

// Home Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Server is running successfully ",
  });
});


export default app;