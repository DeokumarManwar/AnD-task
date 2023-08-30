"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var companySchema = new mongoose_1.Schema({
    name: {
        type: String,
    },
}, { timestamps: true });
var companyModel = (0, mongoose_1.model)("companies", companySchema);
exports.default = companyModel;
