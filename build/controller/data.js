"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateDataController = exports.deleteDataController = exports.getOneDataController = exports.getAllDataController = exports.createDataController = void 0;
var data_1 = __importDefault(require("../models/data"));
// Create Data Controller
var createDataController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var findData, data, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                return [4 /*yield*/, data_1.default.findOne({
                        desc: req.body.desc,
                    })];
            case 1:
                findData = _a.sent();
                if (!findData) return [3 /*break*/, 2];
                res.status(400).send({ message: "Data already exists" });
                return [3 /*break*/, 4];
            case 2: return [4 /*yield*/, data_1.default.create(req.body)];
            case 3:
                data = _a.sent();
                if (data) {
                    res
                        .status(200)
                        .json({ message: "successfully created data", data: data });
                }
                _a.label = 4;
            case 4: return [3 /*break*/, 6];
            case 5:
                error_1 = _a.sent();
                res.status(500).json({ message: "Something went wrong", error: error_1 });
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.createDataController = createDataController;
// Get All Data Controller
var getAllDataController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var data, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, data_1.default.find()];
            case 1:
                data = _a.sent();
                if (data) {
                    res
                        .status(200)
                        .json({ message: "successfully fetched data", data: data });
                }
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                res.status(500).json({ message: "Something went wrong", error: error_2 });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getAllDataController = getAllDataController;
var getOneDataController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var data, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, data_1.default.findById(req.params.id)];
            case 1:
                data = _a.sent();
                if (data) {
                    res
                        .status(200)
                        .json({ message: "successfully fetched data", data: data });
                }
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                res.status(500).json({ message: "Something went wrong", error: error_3 });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getOneDataController = getOneDataController;
// Delete Data Controller
var deleteDataController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var foundData, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, data_1.default.findByIdAndDelete(req.params.id)];
            case 1:
                foundData = _a.sent();
                if (foundData) {
                    res
                        .status(200)
                        .json({ message: "successfully deleted data", data: foundData });
                }
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                res.status(500).json({ message: "Something went wrong", error: error_4 });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.deleteDataController = deleteDataController;
// Update Data Controller
var updateDataController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var foundData, updated_1, foundDataInDatabase, _a, catalog_id_1, rating_id_1, _b, catalog_id_2, rating_id_2, company_id_1, error_5;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 12, , 13]);
                return [4 /*yield*/, data_1.default.findById(req.body.id)];
            case 1:
                foundData = _c.sent();
                if (!!foundData) return [3 /*break*/, 2];
                res.status(400).send({ message: "Data not found" });
                return [3 /*break*/, 11];
            case 2:
                updated_1 = false;
                if (!(req.body.type === 1)) return [3 /*break*/, 5];
                return [4 /*yield*/, data_1.default.findOne({
                        desc: req.body.data.desc,
                    })];
            case 3:
                foundDataInDatabase = _c.sent();
                if (foundDataInDatabase && foundDataInDatabase._id != req.body.id) {
                    return [2 /*return*/, res.status(400).send({ message: "Data already exists" })];
                }
                foundData.catalog = req.body.data.catalog;
                foundData.desc = req.body.data.desc;
                return [4 /*yield*/, foundData.save()];
            case 4:
                _c.sent();
                return [2 /*return*/, res
                        .status(200)
                        .json({ message: "Data updated Successfully", data: foundData })];
            case 5:
                if (!(req.body.type === 2)) return [3 /*break*/, 7];
                foundData.catalog.map(function (cat) {
                    var _a, _b;
                    console.log((_a = cat._id) === null || _a === void 0 ? void 0 : _a.toString(), req.body.data.catalog_id);
                    if (((_b = cat._id) === null || _b === void 0 ? void 0 : _b.toString()) === req.body.data.catalog_id) {
                        updated_1 = true;
                        cat = req.body.data.catalog;
                    }
                });
                if (!updated_1) {
                    return [2 /*return*/, res.status(400).send({ message: "Catalog not found" })];
                }
                return [4 /*yield*/, foundData.save()];
            case 6:
                _c.sent();
                return [2 /*return*/, res
                        .status(200)
                        .json({ message: "Data updated Successfully", data: foundData })];
            case 7:
                if (!(req.body.type === 3)) return [3 /*break*/, 9];
                _a = req.body.data, catalog_id_1 = _a.catalog_id, rating_id_1 = _a.rating_id;
                foundData.catalog.map(function (cat) {
                    var _a;
                    if (((_a = cat._id) === null || _a === void 0 ? void 0 : _a.toString()) === catalog_id_1) {
                        cat.rating.map(function (rat) {
                            var _a;
                            if (((_a = rat._id) === null || _a === void 0 ? void 0 : _a.toString()) === rating_id_1) {
                                updated_1 = true;
                                rat = req.body.data.rating;
                            }
                        });
                    }
                });
                if (!updated_1) {
                    return [2 /*return*/, res.status(400).send({ message: "Rating not found" })];
                }
                return [4 /*yield*/, foundData.save()];
            case 8:
                _c.sent();
                return [2 /*return*/, res
                        .status(200)
                        .json({ message: "Data updated Successfully", data: foundData })];
            case 9:
                if (!(req.body.type === 4)) return [3 /*break*/, 11];
                _b = req.body.data, catalog_id_2 = _b.catalog_id, rating_id_2 = _b.rating_id, company_id_1 = _b.company_id;
                foundData.catalog.map(function (cat) {
                    var _a;
                    if (((_a = cat._id) === null || _a === void 0 ? void 0 : _a.toString()) === catalog_id_2) {
                        cat.rating.map(function (rat) {
                            var _a;
                            if (((_a = rat._id) === null || _a === void 0 ? void 0 : _a.toString()) === rating_id_2) {
                                rat.companies.map(function (com) {
                                    var _a;
                                    if (((_a = com._id) === null || _a === void 0 ? void 0 : _a.toString()) === company_id_1) {
                                        var _b = req.body.data.company, company_id_2 = _b.company_id, price = _b.price, discount = _b.discount;
                                        updated_1 = true;
                                        com.company_id = company_id_2;
                                        com.price = price;
                                        com.discount = discount;
                                    }
                                });
                            }
                        });
                    }
                });
                if (!updated_1) {
                    return [2 /*return*/, res.status(400).send({ message: "Company not found" })];
                }
                return [4 /*yield*/, foundData.save()];
            case 10:
                _c.sent();
                return [2 /*return*/, res
                        .status(200)
                        .json({ message: "Data updated Successfully", data: foundData })];
            case 11: return [3 /*break*/, 13];
            case 12:
                error_5 = _c.sent();
                res.status(500).json({ message: "Something went wrong", error: error_5 });
                return [3 /*break*/, 13];
            case 13: return [2 /*return*/];
        }
    });
}); };
exports.updateDataController = updateDataController;
