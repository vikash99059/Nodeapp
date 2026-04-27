import * as userService from "../services/user.service.js";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// SIGNUP
export const signup = async (req, res) => {
  try {
    const { password } = req.body;

    const hashed = await bcrypt.hash(password, 10);

    await userService.createUser({
      ...req.body,
      password: hashed,
    });

    res.json({ message: "Signup successful ✅" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// LOGIN
export const login = async (req, res) => {
  try {
    const user = await userService.findUserByEmail(req.body.email);

    if (!user) return res.status(404).json({ message: "User not found" });

    const match = await bcrypt.compare(req.body.password, user.password);

    if (!match) return res.status(400).json({ message: "Wrong password" });

    const token = jwt.sign(
      { id: user.id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({ message: "Login success ✅", token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET USERS
export const getUsers = async (req, res) => {
  const users = await userService.getAllUsers();
  res.json(users);
};

// UPDATE USER
export const updateUser = async (req, res) => {
  await userService.updateUser(req.params.id, req.body);
  res.json({ message: "Updated ✅" });
};

// DELETE USER
export const deleteUser = async (req, res) => {
  await userService.deleteUser(req.params.id);
  res.json({ message: "Deleted ✅" });
};

// FORGET PASSWORD
export const forgetPassword = async (req, res) => {
  const { email, newPassword } = req.body;

  const hashed = await bcrypt.hash(newPassword, 10);

  await userService.updateUserPassword(email, hashed);

  res.json({ message: "Password updated ✅" });
};