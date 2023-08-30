import { Router } from "express";
import { createCompanyMiddleware } from "../middleware/companies";
import { createCompanyController } from "../controller/companies";
const router: Router = Router();

router.post("/create", createCompanyMiddleware, createCompanyController);

export default router;
