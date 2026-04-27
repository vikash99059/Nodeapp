import db from "../config/db.js";

export const findUserByEmail = async (email) => {
  const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
  return rows[0];
};

export const createUser = async (data) => {
  const { name, email, mobile, password } = data;

  return await db.query(
    "INSERT INTO users (name, email, mobile, password) VALUES (?, ?, ?, ?)",
    [name, email, mobile, password]
  );
};

export const getAllUsers = async () => {
  const [rows] = await db.query("SELECT id, name, email, mobile FROM users");
  return rows;
};

export const updateUser = async (id, data) => {
  const { name, email, mobile } = data;

  return await db.query(
    "UPDATE users SET name=?, email=?, mobile=? WHERE id=?",
    [name, email, mobile, id]
  );
};

export const deleteUser = async (id) => {
  return await db.query("DELETE FROM users WHERE id=?", [id]);
};


// ✅ YEH ADD KARNA HAI (FORGET PASSWORD)
export const updateUserPassword = async (email, password) => {
  return await db.query(
    "UPDATE users SET password=? WHERE email=?",
    [password, email]
  );
};