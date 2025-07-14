import express from "express";
import articleRoute from "./routers/article.route.js";
import topicRoute from "./routers/topic.route.js";

const app = express();

app.use(express.json());

app.use("/api/v1/article", articleRoute);
app.use("/api/v1/topic", topicRoute);

export { app };
