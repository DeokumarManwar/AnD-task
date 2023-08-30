import { ObjectId, Schema, model } from "mongoose";
import { companyInterface } from "../interfaces/companies";

const companySchema = new Schema<companyInterface>(
  {
    price: {
      type: String,
      required: true,
    },
    discount: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const companyModel = model<companyInterface>("companies", companySchema);
export default companyModel;
