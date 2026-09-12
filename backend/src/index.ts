import express from "express";
import { env } from "./config/env";

const app = express();

app.get("/", (_req, res) => {
  res.json({
    message: "Maya's Craft Kitchen API",
  });
});

app.listen(env.PORT, () => {
  console.log(`Server running on http://localhost:${env.PORT}`);
});
  