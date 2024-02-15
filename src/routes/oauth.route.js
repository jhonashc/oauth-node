import { Router } from "express";

import * as oAuthController from "../controllers/oauth.controller.js";

const router = Router();

router.put("/", oAuthController.oAuth);

export default router;
