import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "My API Documentation",
      version: "1.0.0",
    },
  },

  // 🔥 ABSOLUTE FIX (THIS IS THE KEY)
  apis: [
  path.join(__dirname, "./user.routes.js"),
  path.join(__dirname, "./team.routes.js"),
  path.join(__dirname, "./blog.routes.js"), // 👈 ADD THIS
],
};


const swaggerSpec = swaggerJSDoc(options);

export const swaggerDocs = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};