import { Request, Response, NextFunction } from "express";
import {
  catalogInterface,
  companyInterface,
  ratingInterface,
} from "../interfaces/data";

// create data middleware
export const createDataMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { desc, catalog } = req.body;
    const errors: string[] = [];

    if (!desc || !catalog) {
      return res
        .status(400)
        .json({ message: "Description and Catalog are required" });
    }

    catalog.forEach((cat: catalogInterface) => {
      const { catalog_number, rating } = cat;
      if (!catalog_number || !rating) {
        errors.push("Catalog Number and Rating are required");
      }
      rating.forEach((rat: ratingInterface) => {
        const { rating_value, companies } = rat;
        if (!rating_value || !companies) {
          errors.push("Rating Value and Companies are required");
        }
        companies.forEach((comp: companyInterface) => {
          const { company_id, price, discount } = comp;
          if (
            !company_id ||
            !price ||
            !discount ||
            discount < 0 ||
            discount > 100
          ) {
            errors.push("Invalid Company Data");
          }
        });
      });
    });

    if (errors.length > 0) {
      return res.status(400).json({ message: "Validation errors", errors });
    }

    next();
  } catch (error: any) {
    return res
      .status(500)
      .json({ message: "Something went wrong", error: error });
  }
};

// get all data middleware
export const getOneDataMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id }: { id?: string } = req.params;
  if (!id) {
    return res.status(400).send({ message: "ID is required" });
  }

  next();
};

// delete data middleware
export const deleteDataMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id }: { id?: string } = req.params;

  if (!id) {
    return res.status(400).send({ message: "ID is required" });
  }

  next();
};

// update data middleware
export const updateDataMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { type, id, data } = req.body;
  const errors: string[] = [];

  if (!type || type > 4 || type < 1) {
    return res.status(400).json({ message: "type is required" });
  }

  // type 1: Update data
  // type 2: Update catalog
  // type 3: Update rating
  // type 4: Update company

  if (!id) {
    return res.status(400).json({ message: "ID is required" });
  }

  switch (type) {
    // type 1: Update data
    case 1: {
      const { desc, catalog } = data;
      if (!desc || !catalog) {
        errors.push("Description and Catalog are required");
      }
      catalog.forEach((cat: catalogInterface) => {
        const { catalog_number, rating } = cat;
        if (!catalog_number || !rating) {
          errors.push("Catalog Number and Rating are required");
        }
        rating.forEach((rat: ratingInterface) => {
          const { rating_value, companies } = rat;
          if (!rating_value || !companies) {
            errors.push("Rating Value and Companies are required");
          }
          companies.forEach((comp: companyInterface) => {
            const { company_id, price, discount } = comp;
            if (
              !company_id ||
              !price ||
              !discount ||
              discount < 0 ||
              discount > 100
            ) {
              errors.push("Invalid Company Data");
            }
          });
        });
      });
      break;
    }
    // type 2: Update catalog
    case 2: {
      const { catalog, catalog_id } = data;
      if (!catalog || !catalog_id) {
        errors.push("Catalog and Catalog ID are required");
      }
      // Catalog validation...
      const { catalog_number, rating } = catalog;
      if (!catalog_number || !rating) {
        errors.push("Catalog Number and Rating are required");
      }
      rating.forEach((rat: ratingInterface) => {
        const { rating_value, companies } = rat;
        if (!rating_value || !companies) {
          errors.push("Rating Value and Companies are required");
        }
        companies.forEach((comp: companyInterface) => {
          const { company_id, price, discount } = comp;
          if (
            !company_id ||
            !price ||
            !discount ||
            discount < 0 ||
            discount > 100
          ) {
            errors.push("Invalid Company Data");
          }
        });
      });
      break;
    }
    // type 3: Update rating
    case 3: {
      const { rating, catalog_id, rating_id } = data;
      if (!rating || !catalog_id || !rating_id) {
        errors.push("Rating, Catalog ID and Rating ID are required");
      }
      // Rating validation...
      const { rating_value, companies } = rating;
      if (!rating_value || !companies) {
        errors.push("Rating Value and Companies are required");
      }
      companies.forEach((comp: companyInterface) => {
        const { company_id, price, discount } = comp;
        if (
          !company_id ||
          !price ||
          !discount ||
          discount < 0 ||
          discount > 100
        ) {
          errors.push("Invalid Company Data");
        }
      });
      break;
    }
    // type 4: Update company
    case 4: {
      const { company, catalog_id, rating_id, company_id } = data;
      if (
        !company.company_id ||
        !company.price ||
        !company.discount ||
        company.discount < 0 ||
        company.discount > 100 ||
        !catalog_id ||
        !rating_id ||
        !company_id
      ) {
        errors.push("Invalid Company Data, Catalog ID, or Rating ID");
      }
      break;
    }
    default:
      errors.push("Invalid Type");
  }

  if (errors.length > 0) {
    return res.status(400).json({ message: "Validation errors", errors });
  }

  next();
};

// Delete data middleware through put request
export const deleteDataMiddlewarePut = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { type, id } = req.body;

  if (!type || type > 3 || type < 1) {
    return res.status(400).json({ message: "type is required" });
  }

  // type 1: Delete catalog
  // type 2: Delete rating
  // type 3: Delete company

  if (!id) {
    return res.status(400).json({ message: "ID is required" });
  }

  if (type === 1) {
    const { catalog_id } = req.body;
    if (!catalog_id) {
      return res.status(400).json({ message: "Catalog ID is required" });
    }
  } else if (type === 2) {
    const { catalog_id, rating_id } = req.body;
    if (!catalog_id || !rating_id) {
      return res
        .status(400)
        .json({ message: "Catalog ID and Rating ID are required" });
    }
  } else if (type === 3) {
    const { catalog_id, rating_id, company_id } = req.body;
    if (!catalog_id || !rating_id || !company_id) {
      return res
        .status(400)
        .json({ message: "Catalog ID, Rating ID and Company ID are required" });
    }
  }

  next();
};
