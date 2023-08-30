"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateDataMiddleware = exports.deleteDataMiddleware = exports.getOneDataMiddleware = exports.createDataMiddleware = void 0;
// create data middleware
var createDataMiddleware = function (req, res, next) {
    try {
        var _a = req.body, desc = _a.desc, catalog = _a.catalog;
        var errors_1 = [];
        if (!desc || !catalog) {
            errors_1.push("Description and Catalog are required");
        }
        catalog.forEach(function (cat) {
            var catalog_number = cat.catalog_number, rating = cat.rating;
            if (!catalog_number || !rating) {
                errors_1.push("Catalog Number and Rating are required");
            }
            rating.forEach(function (rat) {
                var rating_value = rat.rating_value, companies = rat.companies;
                if (!rating_value || !companies) {
                    errors_1.push("Rating Value and Companies are required");
                }
                companies.forEach(function (comp) {
                    var company_id = comp.company_id, price = comp.price, discount = comp.discount;
                    if (!company_id ||
                        !price ||
                        !discount ||
                        discount < 0 ||
                        discount > 100) {
                        errors_1.push("Invalid Company Data");
                    }
                });
            });
        });
        if (errors_1.length > 0) {
            return res.status(400).json({ message: "Validation errors", errors: errors_1 });
        }
        next();
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong", error: error });
    }
};
exports.createDataMiddleware = createDataMiddleware;
// get all data middleware
var getOneDataMiddleware = function (req, res, next) {
    var id = req.params.id;
    if (!id) {
        res.status(400).send({ message: "ID is required" });
    }
    next();
};
exports.getOneDataMiddleware = getOneDataMiddleware;
// delete data middleware
var deleteDataMiddleware = function (req, res, next) {
    var id = req.params.id;
    if (!id) {
        res.status(400).send({ message: "ID is required" });
    }
    next();
};
exports.deleteDataMiddleware = deleteDataMiddleware;
// update data middleware
var updateDataMiddleware = function (req, res, next) {
    var _a = req.body, type = _a.type, id = _a.id, data = _a.data;
    var errors = [];
    if (!type || type > 4 || type < 1) {
        errors.push("Invalid Type");
    }
    // type 1: Update data
    // type 2: Update catalog
    // type 3: Update rating
    // type 4: Update company
    if (!id) {
        errors.push("ID is required");
    }
    switch (type) {
        // type 1: Update data
        case 1: {
            var desc = data.desc, catalog = data.catalog;
            if (!desc || !catalog) {
                errors.push("Description and Catalog are required");
            }
            catalog.forEach(function (cat) {
                var catalog_number = cat.catalog_number, rating = cat.rating;
                if (!catalog_number || !rating) {
                    errors.push("Catalog Number and Rating are required");
                }
                rating.forEach(function (rat) {
                    var rating_value = rat.rating_value, companies = rat.companies;
                    if (!rating_value || !companies) {
                        errors.push("Rating Value and Companies are required");
                    }
                    companies.forEach(function (comp) {
                        var company_id = comp.company_id, price = comp.price, discount = comp.discount;
                        if (!company_id ||
                            !price ||
                            !discount ||
                            discount < 0 ||
                            discount > 100) {
                            errors.push("Invalid Company Data");
                        }
                    });
                });
            });
            break;
        }
        // type 2: Update catalog
        case 2: {
            var catalog = data.catalog, catalog_id = data.catalog_id;
            if (!catalog || !catalog_id) {
                errors.push("Catalog and Catalog ID are required");
            }
            // Catalog validation...
            var catalog_number = catalog.catalog_number, rating = catalog.rating;
            if (!catalog_number || !rating) {
                errors.push("Catalog Number and Rating are required");
            }
            rating.forEach(function (rat) {
                var rating_value = rat.rating_value, companies = rat.companies;
                if (!rating_value || !companies) {
                    errors.push("Rating Value and Companies are required");
                }
                companies.forEach(function (comp) {
                    var company_id = comp.company_id, price = comp.price, discount = comp.discount;
                    if (!company_id ||
                        !price ||
                        !discount ||
                        discount < 0 ||
                        discount > 100) {
                        errors.push("Invalid Company Data");
                    }
                });
            });
            break;
        }
        // type 3: Update rating
        case 3: {
            var rating = data.rating, catalog_id = data.catalog_id, rating_id = data.rating_id;
            if (!rating || !catalog_id || !rating_id) {
                errors.push("Rating, Catalog ID and Rating ID are required");
            }
            // Rating validation...
            var rating_value = rating.rating_value, companies = rating.companies;
            if (!rating_value || !companies) {
                errors.push("Rating Value and Companies are required");
            }
            companies.forEach(function (comp) {
                var company_id = comp.company_id, price = comp.price, discount = comp.discount;
                if (!company_id ||
                    !price ||
                    !discount ||
                    discount < 0 ||
                    discount > 100) {
                    errors.push("Invalid Company Data");
                }
            });
            break;
        }
        // type 4: Update company
        case 4: {
            var company = data.company, catalog_id = data.catalog_id, rating_id = data.rating_id, company_id = data.company_id;
            if (!company.company_id ||
                !company.price ||
                !company.discount ||
                company.discount < 0 ||
                company.discount > 100 ||
                !catalog_id ||
                !rating_id ||
                !company_id) {
                errors.push("Invalid Company Data, Catalog ID, or Rating ID");
            }
            break;
        }
        default:
            errors.push("Invalid Type");
    }
    if (errors.length > 0) {
        return res.status(400).json({ message: "Validation errors", errors: errors });
    }
    next();
};
exports.updateDataMiddleware = updateDataMiddleware;
