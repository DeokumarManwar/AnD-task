import { Request, Response, NextFunction } from "express";

export const createCompanyMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(req.body);

  const { name } = req.body;
  if (!name) {
    res.status(400).send({ message: "Name is required" });
  }

  next();
};

export const getOneCompanyMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).send({ message: "ID is required" });
  }

  next();
};

export const deleteCompanyMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).send({ message: "ID is required" });
  }

  next();
};

export const updateCompanyMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id,name } = req.body;
  if (!id) {
    res.status(400).send({ message: "ID is required" });
  }
  if (!name) {
    res.status(400).send({ message: "Name is required" });
  }

  next();
};
