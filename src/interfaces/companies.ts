import { ObjectId } from "mongoose";

// ----------------------------- Company Interface

export interface companyInterface {
  _id: ObjectId;
  name : String
  price: String;
  discount: String;
}

// ----------------------------- Company Interface
