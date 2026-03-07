import { Router } from "express";
import { ServerController } from "../controllers/controller";
const router = Router();

router.get("/servercheck", ServerController.servercheck);

export default router;
