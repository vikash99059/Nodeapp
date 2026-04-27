import express from "express";
import cors from "cors";

import userRoutes from "./routes/user.routes.js";
import teamRoutes from "./routes/team.routes.js";
import blogRoutes from "./routes/blog.routes.js";
import { swaggerDocs } from "./routes/swagger.js";

const app = express();


// ===================== CORS =====================
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// ===================== BODY PARSER =====================
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // ✅ IMPORTANT for form-data

// ===================== STATIC FILES (UPLOADS) =====================
app.use("/uploads", express.static("uploads"));

// ===================== ROUTES =====================
app.use("/users", userRoutes);
app.use("/team", teamRoutes);
app.use("/blogs", blogRoutes);

// ===================== SWAGGER =====================
swaggerDocs(app);

// ===================== HEALTH CHECK =====================
app.get("/", (req, res) => {
  res.send("API running 🚀");
});

export default app;