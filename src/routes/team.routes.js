import express from "express";
import {
  createTeam,
  getTeam,
  updateTeam,
  deleteTeam,
} from "../controllers/team.controller.js";

import { upload } from "../middlewares/upload.js";

const router = express.Router();

/* ===================== CREATE TEAM ===================== */
/**
 * @swagger
 * /team:
 *   post:
 *     summary: Create team member
 *     tags: [Team]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - designation
 *               - description
 *               - image
 *             properties:
 *               name:
 *                 type: string
 *                 example: John Doe
 *               designation:
 *                 type: string
 *                 example: Developer
 *               description:
 *                 type: string
 *                 example: Full stack developer
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Team member created successfully
 */
router.post("/", upload.single("image"), createTeam);

/* ===================== GET TEAM ===================== */
/**
 * @swagger
 * /team:
 *   get:
 *     summary: Get all team members
 *     tags: [Team]
 *     responses:
 *       200:
 *         description: List of team members
 */
router.get("/", getTeam);

/* ===================== UPDATE TEAM ===================== */
/**
 * @swagger
 * /team/{id}:
 *   put:
 *     summary: Update team member
 *     tags: [Team]
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
 *               name:
 *                 type: string
 *                 example: Updated Name
 *               designation:
 *                 type: string
 *                 example: Senior Developer
 *               description:
 *                 type: string
 *                 example: Updated description
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Team updated successfully
 */
router.put("/:id", upload.single("image"), updateTeam);

/* ===================== DELETE TEAM ===================== */
/**
 * @swagger
 * /team/{id}:
 *   delete:
 *     summary: Delete team member
 *     tags: [Team]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Team member deleted successfully
 */
router.delete("/:id", deleteTeam);

console.log("✅ TEAM ROUTES LOADED");

export default router;