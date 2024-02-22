import { Router } from "express";

import { OAuthRoutes } from "./oauth.route.js";

export class AppRoutes {
  static get routes() {
    const router = Router();

    router.use("/api/v1/oauth", OAuthRoutes.routes);

    return router;
  }
}
