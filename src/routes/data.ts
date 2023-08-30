import { Router } from "express";
import { createDataMiddleware } from "../middleware/data";
import { createDataController } from "../controller/data";
const router: Router = Router();

router.post("/create", createDataMiddleware, createDataController)


export default router;
