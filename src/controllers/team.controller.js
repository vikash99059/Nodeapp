import db from "../config/db.js";

// CREATE TEAM MEMBER
export const createTeam = async (req, res) => {
  try {
    const { name, designation, description } = req.body;
    const image = req.file ? req.file.filename : null;

    await db.query(
      "INSERT INTO team (name, designation, description, image) VALUES (?, ?, ?, ?)",
      [name, designation, description, image]
    );

    res.json({ message: "Team member added ✅" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET ALL TEAM
export const getTeam = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM team");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// UPDATE TEAM
export const updateTeam = async (req, res) => {
  try {
    const { name, designation, description } = req.body;
    const image = req.file ? req.file.filename : null;

    await db.query(
      "UPDATE team SET name=?, designation=?, description=?, image=? WHERE id=?",
      [name, designation, description, image, req.params.id]
    );

    res.json({ message: "Updated successfully ✅" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE TEAM
export const deleteTeam = async (req, res) => {
  try {
    await db.query("DELETE FROM team WHERE id=?", [req.params.id]);
    res.json({ message: "Deleted successfully ✅" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};