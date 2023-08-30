import { Response, Request } from "express";
import companyModel from "../models/companies";

export const createCompanyController = async (req: Request, res: Response) => {
    
    try {

        const company = await companyModel.create({
          name: req.body.name,
        });

        if (company) {
            res.status(200).send(company)
        }
    }

    catch (error) {
        res.send(error)
    }
}
