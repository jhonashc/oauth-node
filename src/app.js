import cors from "cors";
import morgan from "morgan";
import express from "express";

import { exceptionHandler } from "./middlewares/exception-handler.middleware.js";
import oAuthRoutes from "./routes/oauth.route.js";

const app = express();

// Settings
app.set("port", process.env.PORT || 8000);

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/v1/oauth", oAuthRoutes);

// Advanced middlewares
app.use(exceptionHandler);

export default app;
