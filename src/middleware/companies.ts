import { Request, Response, NextFunction } from "express";

export const createCompanyMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(req.body);

  const { name } = req.body;
  if (name === undefined || name === null || name === "") {
    res.status(400).send({ message: "Name is required" });
  }

  next();
};
