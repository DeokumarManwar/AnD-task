"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCompanyMiddleware = exports.deleteCompanyMiddleware = exports.getOneCompanyMiddleware = exports.createCompanyMiddleware = void 0;
var createCompanyMiddleware = function (req, res, next) {
    console.log(req.body);
    var name = req.body.name;
    if (!name) {
        res.status(400).send({ message: "Name is required" });
    }
    next();
};
exports.createCompanyMiddleware = createCompanyMiddleware;
var getOneCompanyMiddleware = function (req, res, next) {
    var id = req.params.id;
    if (!id) {
        res.status(400).send({ message: "ID is required" });
    }
    next();
};
exports.getOneCompanyMiddleware = getOneCompanyMiddleware;
var deleteCompanyMiddleware = function (req, res, next) {
    var id = req.params.id;
    if (!id) {
        res.status(400).send({ message: "ID is required" });
    }
    next();
};
exports.deleteCompanyMiddleware = deleteCompanyMiddleware;
var updateCompanyMiddleware = function (req, res, next) {
    var _a = req.body, id = _a.id, name = _a.name;
    if (!id) {
        res.status(400).send({ message: "ID is required" });
    }
    if (!name) {
        res.status(400).send({ message: "Name is required" });
    }
    next();
};
exports.updateCompanyMiddleware = updateCompanyMiddleware;
