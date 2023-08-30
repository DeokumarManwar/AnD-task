import { Router } from "express";
import {
  createCompanyMiddleware,
  deleteCompanyMiddleware,
  getOneCompanyMiddleware,
  updateCompanyMiddleware,
} from "../middleware/companies";
import {
  createCompanyController,
  deleteCompanyController,
  getAllCompaniesController,
  getOneCompaniesController,
  updateCompanyController,
} from "../controller/companies";
const router: Router = Router();

// Create Companies API
router.post("/create", createCompanyMiddleware, createCompanyController);

// Get Companies API
router.get("/getAll", getAllCompaniesController);

router.get("/getOne/:id", getOneCompanyMiddleware, getOneCompaniesController);

// Update Companies API
router.put("/update", updateCompanyMiddleware, updateCompanyController);

// Delete Companies API
router.delete("/delete/:id", deleteCompanyMiddleware, deleteCompanyController);

export default router;
