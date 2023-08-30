import { Response, Request } from "express";
import dataModel from "../models/data";

export const createDataController = async (req: Request, res: Response) => {

  try {
    const findData = await dataModel.findOne({ desc: req.body.desc });

    if (findData) {
      res.status(400).send({ message: "Data already exists" });
    } else {
      const data = await dataModel.create(req.body);

      if (data) {
        res.status(200).send(data);
      }
    }
  } catch (error) {
    res.send(error);
  }
};
