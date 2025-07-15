import express from "express";
import articleRoute from "./routers/article.route.js";
import topicRoute from "./routers/topic.route.js";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "*", // or '*', for all (not recommended in production)
    // credentials: true,
  })
);

app.use("/api/v1/article", articleRoute);
app.use("/api/v1/topic", topicRoute);

export { app };
