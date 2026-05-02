import express from "express";
import * as dishController from "../controllers/dishController.js";
import { verifyToken } from "../middlewares/auth.middleware.js";

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Dish:
 *       type: object
 *       required:
 *         - name
 *         - price
 *         - category
 *       properties:
 *         name:
 *           type: string
 *           example: Paneer Butter Masala
 *         price:
 *           type: number
 *           example: 250
 *         category:
 *           type: string
 *           example: veg
 *         description:
 *           type: string
 *           example: tasty dish
 */

/**
 * @swagger
 * /api/dishes:
 *   post:
 *     summary: Create a dish
 *     tags: [Dish]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Dish'
 *     responses:
 *       201:
 *         description: Dish created
 */
router.post("/", dishController.createDish);

/**
 * @swagger
 * /api/dishes:
 *   get:
 *     summary: Get all dishes
 *     tags: [Dish]
 *     responses:
 *       200:
 *         description: List of dishes
 */
router.get("/", dishController.getAllDishes);

/**
 * @swagger
 * /api/dishes/category/{category}:
 *   get:
 *     summary: Get dishes by category
 *     tags: [Dish]
 *     parameters:
 *       - in: path
 *         name: category
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Category dishes
 */
router.get("/category/:category", dishController.getDishByCategory);

/**
 * @swagger
 * /api/dishes/{id}:
 *   get:
 *     summary: Get dish by ID
 *     tags: [Dish]
 */
router.get("/:id", dishController.getDishById);

/**
 * @swagger
 * /api/dishes/{id}:
 *   put:
 *     summary: Update dish
 *     tags: [Dish]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Dish'
 */
router.put("/:id", dishController.updateDish);

/**
 * @swagger
 * /api/dishes/{id}:
 *   delete:
 *     summary: Delete dish
 *     tags: [Dish]
 */
router.delete("/:id", dishController.deleteDish);

export default router;