import { ObjectId } from "mongoose";

// ----------------------------- Company Interface
export interface companyInterface {
  _id?: ObjectId;
  company_id: String;
  price: number;
  discount: number;
}
// ----------------------------- Company Interface

// ----------------------------- Rating Interface

export interface ratingInterface {
  _id?: ObjectId;
  rating_value: String;
  companies: Array<companyInterface>;
}

// ----------------------------- Rating Interface

// ----------------------------- Catalog Interface

export interface catalogInterface {
  _id?: ObjectId;
  catalog_number: String;
  rating: Array<ratingInterface>;
}
// ----------------------------- Catalog Interface

// ----------------------------- DESC Interface

export interface DESC {
  desc: String;
  catalog: Array<catalogInterface>;
}
// ----------------------------- DESC Interface
