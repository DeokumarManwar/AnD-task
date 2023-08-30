"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var body_parser_1 = __importDefault(require("body-parser"));
var http_errors_1 = __importDefault(require("http-errors"));
var morgan_1 = __importDefault(require("morgan"));
var DB_1 = __importDefault(require("./config/DB"));
var PORT = process.env.PORT || 8000;
// Express
var app = (0, express_1.default)();
app.use(express_1.default.json());
// Mongo Connection
(0, DB_1.default)();
// CORS
var corsOptions = {
    origin: "*",
};
app.use((0, cors_1.default)(corsOptions));
// Logger of Requests
app.use((0, morgan_1.default)("dev"));
// BodyParser
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
// Routes
app.get("/", function (req, res) {
    res.send("Welcome to the API");
});
var companies_1 = __importDefault(require("./routes/companies"));
app.use("/api/company", companies_1.default);
var data_1 = __importDefault(require("./routes/data"));
app.use("/api/data", data_1.default);
// Error Handlings
app.use(function (req, res, next) {
    next((0, http_errors_1.default)(404, "Invalid API. Use the official documentation to get the list of valid APIS."));
});
// PORT
app.listen(PORT, function () {
    console.log("Server is running on port ".concat(PORT));
});
