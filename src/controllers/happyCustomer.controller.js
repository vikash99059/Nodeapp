import db from "../config/db.js";

// CREATE
export const createCustomer = async (req, res) => {
  try {
    const { name, description } = req.body;
    const image = req.file ? req.file.filename : null;

    await db.query(
      "INSERT INTO happy_customers (name, description, image) VALUES (?, ?, ?)",
      [name, description, image]
    );

    res.json({ message: "Customer added ✅" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET ALL
export const getCustomers = async (req, res) => {
  const [rows] = await db.query("SELECT * FROM happy_customers ORDER BY id DESC");
  res.json(rows);
};

// UPDATE
export const updateCustomer = async (req, res) => {
  try {
    const { name, description } = req.body;
    const image = req.file ? req.file.filename : null;

    await db.query(
      "UPDATE happy_customers SET name=?, description=?, image=? WHERE id=?",
      [name, description, image, req.params.id]
    );

    res.json({ message: "Updated ✅" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE
export const deleteCustomer = async (req, res) => {
  await db.query("DELETE FROM happy_customers WHERE id=?", [req.params.id]);
  res.json({ message: "Deleted ✅" });
};