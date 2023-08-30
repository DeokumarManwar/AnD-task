import { ObjectId } from "mongoose";

// ----------------------------- Company Interface
export interface companyInterface {
  company_id: String;
  price: String;
  discount: String;
}
// ----------------------------- Company Interface

// ----------------------------- Rating Interface

export interface ratingInterface {
  rating_value: String;
  companies: Array<companyInterface>;
}

// ----------------------------- Rating Interface

// ----------------------------- Catalog Interface

export interface catalogInterface {
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
