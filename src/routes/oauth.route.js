import { Router } from "express";

import { OAuthController } from "../controllers/oauth.controller.js";
import { OAuthService } from "../services/oauth.service.js";

export class OAuthRoutes {
  static get routes() {
    const router = Router();

    const oAuthService = new OAuthService();
    const oAuthController = new OAuthController(oAuthService);

    router.put("/", oAuthController.oAuth);

    return router;
  }
}
