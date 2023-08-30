"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var companySchema = new mongoose_1.Schema({
    company_id: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "companies",
    },
    price: {
        type: Number,
    },
    discount: {
        type: Number,
    },
}, { timestamps: true });
var ratingSchema = new mongoose_1.Schema({
    rating_value: {
        type: String,
    },
    companies: {
        type: [companySchema],
    },
}, { timestamps: true });
var catalogSchema = new mongoose_1.Schema({
    catalog_number: {
        type: String,
        required: true,
    },
    rating: {
        type: [ratingSchema],
    },
}, { timestamps: true });
var dataSchema = new mongoose_1.Schema({
    desc: {
        type: String,
        required: true,
        unique: true,
        message: "Name is required and should be unique.",
    },
    catalog: {
        type: [catalogSchema],
        required: true,
    },
}, { timestamps: true });
var dataModel = (0, mongoose_1.model)("data", dataSchema);
exports.default = dataModel;
