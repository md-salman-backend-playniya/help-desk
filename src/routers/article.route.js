import { Router } from "express";
import {
  addArticle,
  deleteArticle,
  getArticleById,
  getArticlesByTopic,
  getMostAskedArticles,
  getRecentArticles,
  updateArticle,
} from "../controllers/article.controller.js";

const router = Router();

router.get("/recent", getRecentArticles);
router.get("/:id", getArticleById);
router.get("/top", getMostAskedArticles);
router.get("/:topicId", getArticlesByTopic);
router.post("/", addArticle);
router.delete("/:id", deleteArticle);
router.put("/:id", updateArticle);

export default router;
