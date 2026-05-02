// import swaggerJSDoc from "swagger-jsdoc";
// import swaggerUi from "swagger-ui-express";
// import path from "path";
// import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const options = {
//   definition: {
//     openapi: "3.0.0",
//     info: {
//       title: "Vikash-Singh-Api",
//       version: "1.0.0",
//     },
//   },

//   // 🔥 ABSOLUTE FIX (THIS IS THE KEY)
//   apis: [
//   path.join(__dirname, "./user.routes.js"),
//   path.join(__dirname, "./team.routes.js"),
//   path.join(__dirname, "./blog.routes.js"),
//   path.join(__dirname, "./happyCustomer.routes.js"), //
//   path.join(__dirname, "./dishRoutes.js") // 👈 ADD THIS
// ],
// };


// const swaggerSpec = swaggerJSDoc(options);

// export const swaggerDocs = (app) => {
//   app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// };



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
      title: "Vikash-Singh-Api",
      version: "1.0.0",
    },

    // ✅ ADD THIS PART (JWT CONFIG)
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },

    // ✅ GLOBAL SECURITY (OPTIONAL but recommended)
    security: [
      {
        bearerAuth: [],
      },
    ],
  },

  apis: [
    path.join(__dirname, "./user.routes.js"),
    path.join(__dirname, "./team.routes.js"),
    path.join(__dirname, "./blog.routes.js"),
    path.join(__dirname, "./happyCustomer.routes.js"),
    path.join(__dirname, "./dishRoutes.js"),
    path.join(__dirname, "./authRoutes.js")
  ],
};

const swaggerSpec = swaggerJSDoc(options);

export const swaggerDocs = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};