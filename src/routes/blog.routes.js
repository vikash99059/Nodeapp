import express from "express";
import {
  createBlog,
  getBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
} from "../controllers/blog.controller.js";

import { upload } from "../middlewares/upload.js";
import { verifyToken } from "../middlewares/auth.middleware.js";

const router = express.Router();

/* ===================== CREATE BLOG ===================== */
/**
 * @swagger
 * /blogs:
 *   post:
 *     summary: Create a new blog
 *     tags: [Blogs]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - content
 *               - author_name
 *               - image
 *             properties:
 *               title:
 *                 type: string
 *                 example: Handmade Pottery Art
 *               slug:
 *                 type: string
 *                 example: handmade-pottery-art
 *               excerpt:
 *                 type: string
 *                 example: Traditional village pottery story
 *               content:
 *                 type: string
 *                 example: Full blog content here...
 *               author_name:
 *                 type: string
 *                 example: Ramesh Kumar
 *               category:
 *                 type: string
 *                 example: Craft
 *               tags:
 *                 type: string
 *                 example: pottery, handmade, village
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Blog created successfully
 */
router.post("/", upload.single("image"), createBlog);

/* ===================== GET ALL BLOGS ===================== */
/**
 * @swagger
 * /blogs:
 *   get:
 *     summary: Get all blogs
 *     tags: [Blogs]
 *     responses:
 *       200:
 *         description: List of all blogs
 */
router.get("/", getBlogs);

/* ===================== GET BLOG BY ID ===================== */
/**
 * @swagger
 * /blogs/{id}:
 *   get:
 *     summary: Get blog by ID
 *     tags: [Blogs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Single blog data
 */
router.get("/:id", getBlogById);

/* ===================== UPDATE BLOG ===================== */
/**
 * @swagger
 * /blogs/{id}:
 *   put:
 *     summary: Update blog
 *     tags: [Blogs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               slug:
 *                 type: string
 *               excerpt:
 *                 type: string
 *               content:
 *                 type: string
 *               author_name:
 *                 type: string
 *               category:
 *                 type: string
 *               tags:
 *                 type: string
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Blog updated successfully
 */
router.put("/:id", upload.single("image"), updateBlog);

/* ===================== DELETE BLOG ===================== */
/**
 * @swagger
 * /blogs/{id}:
 *   delete:
 *     summary: Delete blog
 *     tags: [Blogs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Blog deleted successfully
 */
router.delete("/:id", deleteBlog);

export default router;