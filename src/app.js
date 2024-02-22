import "./config/envs.config.js";

import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import express from "express";

import { exceptionHandler } from "./middlewares/index.js";
import { AppRoutes } from "./routes/app.route.js";
import { envs } from "./config/envs.config.js";

class Server {
  constructor() {
    this.app = express();
    this.port = envs.PORT;
    this.initialize();
  }

  initialize() {
    this.middlewares();
    this.routes();
    this.advancedMiddlewares();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(morgan("dev"));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  advancedMiddlewares() {
    this.app.use(exceptionHandler);
  }

  routes() {
    this.app.use(AppRoutes.routes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`🚀 App running on port ${this.port}`);
      console.log(`Running in ${envs.NODE_ENV}`);
    });
  }
}

export default Server;
