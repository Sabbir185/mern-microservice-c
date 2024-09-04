import express from "express";
import { BlogController } from "../controllers/BlogController";

const router = express.Router();
const blogController = new BlogController();

router.post("/create", (req, res) => blogController.create(req, res));
router.get("/:id", (req, res) => blogController.getPost(req, res));

export default router;
