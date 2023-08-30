"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var companies_1 = require("../middleware/companies");
var companies_2 = require("../controller/companies");
var router = (0, express_1.Router)();
// Create Companies API
router.post("/create", companies_1.createCompanyMiddleware, companies_2.createCompanyController);
// Get Companies API
router.get("/getAll", companies_2.getAllCompaniesController);
router.get("/getOne/:id", companies_1.getOneCompanyMiddleware, companies_2.getOneCompaniesController);
// Update Companies API
router.put("/update", companies_1.updateCompanyMiddleware, companies_2.updateCompanyController);
// Delete Companies API
router.delete("/delete/:id", companies_1.deleteCompanyMiddleware, companies_2.deleteCompanyController);
exports.default = router;
