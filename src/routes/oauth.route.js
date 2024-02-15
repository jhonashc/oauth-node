import { Router } from "express";

import { oAuth } from "../controllers/oauth.controller.js";

const router = Router();

router.put("/", oAuth);

export default router;
