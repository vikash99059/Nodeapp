import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// demo user (replace with DB later)
const user = {
  id: 1,
  email: "v4552099@gmail.com",
  password: bcrypt.hashSync("123456", 8),
};

// LOGIN
export const login = (req, res) => {
  const { email, password } = req.body;

  if (email !== user.email) {
    return res.status(404).json({ message: "User not found" });
  }

  const isMatch = bcrypt.compareSync(password, user.password);

  if (!isMatch) {
    return res.status(401).json({ message: "Invalid password" });
  }

  const token = jwt.sign(
    { id: user.id, email: user.email },
    "SECRET_KEY",
    { expiresIn: "1d" }
  );

  res.json({
    message: "Login successful",
    token,
  });
};