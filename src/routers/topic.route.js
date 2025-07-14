import { Router } from "express";
import { addTopic } from "../controllers/topic.controller.js";

const router = Router();

router.post("/", addTopic);

export default router;
