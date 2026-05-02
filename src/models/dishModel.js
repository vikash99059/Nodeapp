import db from "../config/db.js";

// CREATE
export const createDish = async (data) => {
  const sql = "INSERT INTO dishes (name, price, category, description) VALUES (?, ?, ?, ?)";
  const [result] = await db.query(sql, [data.name, data.price, data.category, data.description]);
  return result;
};

// GET ALL
export const getAllDishes = async () => {
  const [rows] = await db.query("SELECT * FROM dishes");
  return rows;
};

// GET BY ID
export const getDishById = async (id) => {
  const [rows] = await db.query("SELECT * FROM dishes WHERE id=?", [id]);
  return rows;
};

// GET BY CATEGORY
export const getDishByCategory = async (category) => {
  const [rows] = await db.query("SELECT * FROM dishes WHERE category=?", [category]);
  return rows;
};

// UPDATE
export const updateDish = async (id, data) => {
  const sql = "UPDATE dishes SET name=?, price=?, category=?, description=? WHERE id=?";
  const [result] = await db.query(sql, [data.name, data.price, data.category, data.description, id]);
  return result;
};

// DELETE
export const deleteDish = async (id) => {
  const [result] = await db.query("DELETE FROM dishes WHERE id=?", [id]);
  return result;
};