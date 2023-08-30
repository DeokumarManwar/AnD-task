"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var data_1 = require("../middleware/data");
var data_2 = require("../controller/data");
var router = (0, express_1.Router)();
// Create Data API
router.post("/create", data_1.createDataMiddleware, data_2.createDataController);
// Get Data API
router.get("/getOne/:id", data_1.getOneDataMiddleware, data_2.getOneDataController);
router.get("/getAll", data_2.getAllDataController);
// Update Data API
router.put("/update", data_1.updateDataMiddleware, data_2.updateDataController);
// Delete Data API
router.delete("/delete/:id", data_1.deleteDataMiddleware, data_2.deleteDataController);
exports.default = router;
