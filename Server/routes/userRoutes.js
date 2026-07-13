import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "User API is working",
    users: [
      {
        id: 1,
        name: "John",
        email: "john@example.com",
      },
      {
        id: 2,
        name: "Alice",
        email: "alice@example.com",
      },
    ],
  });
});

export default router;