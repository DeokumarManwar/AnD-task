import { ObjectId, Schema, model } from "mongoose";
import {
  DESC,
  catalogInterface,
  ratingInterface,
  companyInterface,
} from "../interfaces/data";

const companySchema = new Schema<companyInterface>(
  {
    company_id: {
      type: String,
      required: true,
    },
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

const ratingSchema = new Schema<ratingInterface>(
  {
    rating_value: {
      type: String,
      required: true,
    },
    companies: {
      type: [companySchema],
      required: true,
    },
  },
  { timestamps: true }
);

const catalogSchema = new Schema<catalogInterface>(
  {
    catalog_number: {
      type: String,
      required: true,
    },
    rating: {
      type: [ratingSchema],
      required: true,
    },
  },
  { timestamps: true }
);

const dataSchema = new Schema<DESC>(
  {
    desc: {
      type: String,
      required: true,
      unique: true,
    },
    catalog: {
      type: [catalogSchema],
      required: true,
    },
  },
  { timestamps: true }
);

const dataModel = model<DESC>("data", dataSchema);
export default dataModel;
