import { Response, Request } from "express";
import { DESC, catalogInterface, ratingInterface } from "../interfaces/data";
import dataModel from "../models/data";

// Create Data Controller
export const createDataController = async (req: Request, res: Response) => {
  try {
    const findData: DESC | null = await dataModel.findOne({
      desc: req.body.desc,
    });

    if (findData) {
      res.status(400).send({ message: "Data already exists" });
    } else {
      const data: DESC = await dataModel.create(req.body);

      if (data) {
        res
          .status(200)
          .json({ message: "successfully created data", data: data });
      }
    }
  } catch (error: any) {
    res.status(500).json({ message: "Something went wrong", error: error });
  }
};

// Get All Data Controller
export const getAllDataController = async (req: Request, res: Response) => {
  try {
    const data: DESC[] = await dataModel.find();

    if (data) {
      res
        .status(200)
        .json({ message: "successfully fetched data", data: data });
    }
  } catch (error: any) {
    res.status(500).json({ message: "Something went wrong", error: error });
  }
};

export const getOneDataController = async (req: Request, res: Response) => {
  try {
    const data: DESC | null = await dataModel.findById(req.params.id);

    if (data) {
      res
        .status(200)
        .json({ message: "successfully fetched data", data: data });
    }
  } catch (error: any) {
    res.status(500).json({ message: "Something went wrong", error: error });
  }
};

// Delete Data Controller
export const deleteDataController = async (req: Request, res: Response) => {
  try {
    const foundData: DESC | null = await dataModel.findByIdAndDelete(
      req.params.id
    );

    if (foundData) {
      res
        .status(200)
        .json({ message: "successfully deleted data", data: foundData });
    }
  } catch (error: any) {
    res.status(500).json({ message: "Something went wrong", error: error });
  }
};

// Update Data Controller
export const updateDataController = async (req: Request, res: Response) => {
  try {
    let foundData = await dataModel.findById(req.body.id);

    if (!foundData) {
      res.status(400).send({ message: "Data not found" });
    } else {
      let updated = false;
      // type 1: Update data
      if (req.body.type === 1) {
        // check if desc data already exists
        const foundDataInDatabase = await dataModel.findOne({
          desc: req.body.data.desc,
        });
        if (foundDataInDatabase && foundDataInDatabase._id != req.body.id) {
          return res.status(400).send({ message: "Data already exists" });
        }

        foundData.catalog = req.body.data.catalog;
        foundData.desc = req.body.data.desc;
        await foundData.save();
        return res
          .status(200)
          .json({ message: "Data updated Successfully", data: foundData });
      }

      // type 2: Update catalog
      if (req.body.type === 2) {
        foundData.catalog.map((cat: catalogInterface) => {
          console.log(cat._id?.toString(), req.body.data.catalog_id);
          if (cat._id?.toString() === req.body.data.catalog_id) {
            updated = true;
            cat = req.body.data.catalog;
          }
        });
        if (!updated) {
          return res.status(400).send({ message: "Catalog not found" });
        }
        await foundData.save();
        return res
          .status(200)
          .json({ message: "Data updated Successfully", data: foundData });
      }

      // type 3: Update rating
      if (req.body.type === 3) {
        const { catalog_id, rating_id } = req.body.data;
        foundData.catalog.map((cat: catalogInterface) => {
          if (cat._id?.toString() === catalog_id) {
            cat.rating.map((rat: ratingInterface) => {
              if (rat._id?.toString() === rating_id) {
                updated = true;
                rat = req.body.data.rating;
              }
            });
          }
        });

        if (!updated) {
          return res.status(400).send({ message: "Rating not found" });
        }

        await foundData.save();
        return res
          .status(200)
          .json({ message: "Data updated Successfully", data: foundData });
      }

      // type 4: Update company
      if (req.body.type === 4) {
        const { catalog_id, rating_id, company_id } = req.body.data;

        foundData.catalog.map((cat: catalogInterface) => {
          if (cat._id?.toString() === catalog_id) {
            cat.rating.map((rat: ratingInterface) => {
              if (rat._id?.toString() === rating_id) {
                rat.companies.map((com) => {
                  if (com._id?.toString() === company_id) {
                    const { company_id, price, discount } =
                      req.body.data.company;
                    updated = true;
                    com.company_id = company_id;
                    com.price = price;
                    com.discount = discount;
                  }
                });
              }
            });
          }
        });

        if (!updated) {
          return res.status(400).send({ message: "Company not found" });
        }
        await foundData.save();
        return res
          .status(200)
          .json({ message: "Data updated Successfully", data: foundData });
      }
    }
  } catch (error: any) {
    res.status(500).json({ message: "Something went wrong", error: error });
  }
};
