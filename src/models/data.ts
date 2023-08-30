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
      type: Schema.Types.ObjectId,
      ref: "companies",
    },
    price: {
      type: Number,
    },
    discount: {
      type: Number,
    },
  },
  { timestamps: true }
);

const ratingSchema = new Schema<ratingInterface>(
  {
    rating_value: {
      type: String,
    },
    companies: {
      type: [companySchema],
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
      message: "Name is required and should be unique.",
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
