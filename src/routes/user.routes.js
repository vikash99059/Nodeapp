import express from "express";
import {
  signup,
  login,
  getUsers,
  updateUser,
  deleteUser,
  forgetPassword,
} from "../controllers/user.controller.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User APIs
 */

/* ===================== SIGNUP ===================== */
/**
 * @swagger
 * /users/signup:
 *   post:
 *     summary: User signup
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - mobile
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *                 example: John Doe
 *               email:
 *                 type: string
 *                 example: john@gmail.com
 *               mobile:
 *                 type: string
 *                 example: 9876543210
 *               password:
 *                 type: string
 *                 example: 123456
 *     responses:
 *       200:
 *         description: User created successfully
 *       500:
 *         description: Server error
 */
router.post("/signup", signup);

/* ===================== LOGIN ===================== */
/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: User login
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: john@gmail.com
 *               password:
 *                 type: string
 *                 example: 123456
 *     responses:
 *       200:
 *         description: Login success
 *       400:
 *         description: Wrong credentials
 */
router.post("/login", login);

/* ===================== GET USERS ===================== */
/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: List of users
 */
router.get("/", getUsers);

/* ===================== UPDATE USER ===================== */
/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Update user
 *     tags: [Users]
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
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Updated Name
 *               email:
 *                 type: string
 *                 example: update@gmail.com
 *               mobile:
 *                 type: string
 *                 example: 9999999999
 *     responses:
 *       200:
 *         description: User updated successfully
 */
router.put("/:id", updateUser);

/* ===================== DELETE USER ===================== */
/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Delete user
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: User deleted successfully
 */
router.delete("/:id", deleteUser);

/* ===================== FORGET PASSWORD ===================== */
/**
 * @swagger
 * /users/forget-password:
 *   post:
 *     summary: Forget password
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - newPassword
 *             properties:
 *               email:
 *                 type: string
 *                 example: john@gmail.com
 *               newPassword:
 *                 type: string
 *                 example: 123456
 *     responses:
 *       200:
 *         description: Password updated successfully
 */
router.post("/forget-password", forgetPassword);

console.log("✅ USER ROUTES LOADED");

export default router;