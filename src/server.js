import dotenv from "dotenv";
import fs from "fs";
dotenv.config();

import app from "./app.js";

const PORT = process.env.PORT || 5000;


if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${3000}`);
});