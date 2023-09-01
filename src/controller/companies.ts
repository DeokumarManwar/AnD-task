import { Response, Request } from "express";
import companyModel from "../models/companies";
import { companyInterface } from "../interfaces/companies";

// Create Company Controller
export const createCompanyController = async (req: Request, res: Response) => {
  try {
    const company: companyInterface = await companyModel.create({
      name: req.body.name,
    });

    if (company) {
      return res
        .status(200)
        .json({ message: "successfully created company", data: company });
    }
  } catch (error: any) {
    return res
      .status(500)
      .json({ message: "Something went wrong", error: error });
  }
};

// Get All Companies Controller
export const getAllCompaniesController = async (
  req: Request,
  res: Response
) => {
  try {
    const companies: companyInterface[] = await companyModel.find();

    if (companies) {
      return res
        .status(200)
        .json({ message: "successfully fetched companies", data: companies });
    }
  } catch (error: any) {
    return res
      .status(500)
      .json({ message: "Something went wrong", error: error });
  }
};

export const getOneCompaniesController = async (
  req: Request,
  res: Response
) => {
  try {
    const company: companyInterface | null = await companyModel.findById(
      req.params.id
    );

    if (company) {
      return res
        .status(200)
        .json({ message: "successfully fetched company", data: company });
    }
  } catch (error: any) {
    return res
      .status(500)
      .json({ message: "Something went wrong", error: error });
  }
};

// Update Company Controller
export const updateCompanyController = async (req: Request, res: Response) => {
  try {
    const company = await companyModel.findById(req.body.id);

    if (company) {
      company.name = req.body.name;
      await company.save();
      return res
        .status(200)
        .json({ message: "successfully updated company", data: company });
    }
  } catch (error: any) {
    return res
      .status(500)
      .json({ message: "Something went wrong", error: error });
  }
};

// Delete Company Controller
export const deleteCompanyController = async (req: Request, res: Response) => {
  try {
    const company: companyInterface | null =
      await companyModel.findByIdAndDelete(req.params.id);

    if (company) {
      return res
        .status(200)
        .json({ message: "successfully deleted company", data: company });
    }
  } catch (error: any) {
    return res
      .status(500)
      .json({ message: "Something went wrong", error: error });
  }
};
