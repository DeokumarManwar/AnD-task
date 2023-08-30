import { Request, Response, NextFunction } from "express";

export const createDataMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { desc, catalog } = req.body;

  let error = false;

  if (desc === undefined || desc === null || desc === "") {
    res.status(400).send({ message: "Description is required" });
  } else if (catalog === undefined || catalog === null || catalog === "") {
    res.status(400).send({ message: "Catalog is required" });
  } else
    catalog.forEach((cat: any) => {
      const { catalog_number, rating } = cat;

      if (
        catalog_number === undefined ||
        catalog_number === null ||
        catalog_number === ""
      ) {
        res.status(400).send({ message: "Catalog Number is required" });
        error = true;
      } else if (rating === undefined || rating === null || rating === "") {
        res.status(400).send({ message: "Rating is required" });
        error = true;
      } else
        rating.forEach((rat: any) => {
          const { rating_value, companies } = rat;

          if (
            rating_value === undefined ||
            rating_value === null ||
            rating_value === ""
          ) {
              res.status(400).send({ message: "Rating Value is required" });
              error = true;
          } else if (
            companies === undefined ||
            companies === null ||
            companies === ""
          ) {
              res.status(400).send({ message: "Companies is required" });
              error = true;
          } else
            companies.forEach((comp: any) => {
              const { company_id, price, discount } = comp;

              if (
                company_id === undefined ||
                company_id === null ||
                company_id === ""
              ) {
                res.status(400).send({
                  message:
                    "Company ID is required at rating value " + rating_value,
                });
                  error = true;
              } else if (
                price === undefined ||
                price === null ||
                price === ""
              ) {
                  res.status(400).send({ message: "Price is required" });
                  error = true;
              } else if (
                discount === undefined ||
                discount === null ||
                discount === ""
              ) {
                  res.status(400).send({ message: "Discount is required" });
                  error = true;
              } else if (Number(discount) < 0 || Number(discount) > 100) {
                res
                  .status(400)
                      .send({ message: "Discount should be between 0 and 100" });
                  error = true;
              }
            });
        });
    });

    if (!error) next();
};
