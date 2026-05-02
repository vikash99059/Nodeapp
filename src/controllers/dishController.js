import * as dishModel from "../models/dishModel.js";

export const getAllDishes = async (req, res) => {
  try {
    const data = await dishModel.getAllDishes();
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "DB Error" });
  }
};

export const createDish = async (req, res) => {
  try {
    const result = await dishModel.createDish(req.body);
    res.status(201).json({
      message: "Dish created",
      id: result.insertId
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "DB Error" });
  }
};

export const getDishById = async (req, res) => {
  try {
    const data = await dishModel.getDishById(req.params.id);

    if (!data.length) {
      return res.status(404).json({ message: "Dish not found" });
    }

    res.json(data[0]);
  } catch (err) {
    res.status(500).json({ error: "DB Error" });
  }
};

export const getDishByCategory = async (req, res) => {
  try {
    const data = await dishModel.getDishByCategory(req.params.category);
    res.json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const updateDish = async (req, res) => {
  try {
    await dishModel.updateDish(req.params.id, req.body);
    res.json({ message: "Updated" });
  } catch (err) {
    res.status(500).json(err);
  }
};

export const deleteDish = async (req, res) => {
  try {
    await dishModel.deleteDish(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json(err);
  }
};