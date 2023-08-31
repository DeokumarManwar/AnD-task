import { Router } from "express";
import {
  createDataMiddleware,
  getOneDataMiddleware,
  deleteDataMiddleware,
  updateDataMiddleware,
  deleteDataMiddlewarePut,
} from "../middleware/data";
import {
  createDataController,
  getAllDataController,
  getOneDataController,
  deleteDataController,
  updateDataController,
  deleteDataControllerThroughUpdate,
} from "../controller/data";
const router: Router = Router();

// Create Data API
router.post("/create", createDataMiddleware, createDataController);

// Get Data API
router.get("/getOne/:id", getOneDataMiddleware, getOneDataController);

router.get("/getAll", getAllDataController);

// Update Data API
router.put("/update", updateDataMiddleware, updateDataController);

// Delete Data API
router.delete("/delete/:id", deleteDataMiddleware, deleteDataController);

// Delete Data API put
router.put(
  "/delete",
  deleteDataMiddlewarePut,
  deleteDataControllerThroughUpdate
);

export default router;
