import express from "express";
import {
  createCustomer,
  getCustomers,
  updateCustomer,
  deleteCustomer,
} from "../controllers/happyCustomer.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";

import { upload } from "../middlewares/upload.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: HappyCustomers
 *   description: Happy Customer APIs
 */

/* ===================== CREATE ===================== */
/**
 * @swagger
 * /customers:
 *   post:
 *     summary: Add happy customer
 *     tags: [HappyCustomers]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - description
 *             properties:
 *               name:
 *                 type: string
 *                 example: Rahul Sharma
 *               description:
 *                 type: string
 *                 example: Amazing service, very happy!
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Customer added successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/HappyCustomer'
 */
router.post("/", upload.single("image"), createCustomer);

/* ===================== GET ===================== */
/**
 * @swagger
 * /customers:
 *   get:
 *     summary: Get all customers
 *     tags: [HappyCustomers]
 *     responses:
 *       200:
 *         description: List of customers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/HappyCustomer'
 */
router.get("/", getCustomers);

/* ===================== UPDATE ===================== */
/**
 * @swagger
 * /customers/{id}:
 *   put:
 *     summary: Update customer
 *     tags: [HappyCustomers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Customer updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/HappyCustomer'
 */
router.put("/:id", upload.single("image"), updateCustomer);

/* ===================== DELETE ===================== */
/**
 * @swagger
 * /customers/{id}:
 *   delete:
 *     summary: Delete customer
 *     tags: [HappyCustomers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Customer deleted successfully
 */
router.delete("/:id", deleteCustomer);

export default router;