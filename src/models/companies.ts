import { ObjectId, Schema, model } from "mongoose";
import { companyInterface } from "../interfaces/companies";

const companySchema = new Schema<companyInterface>(
  {
    name: {
      type: String,
    },
  },
  { timestamps: true }
);

const companyModel = model<companyInterface>("companies", companySchema);
export default companyModel;
