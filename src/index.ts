import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import createError from "http-errors";
import logger from "morgan";
import connects from "./config/DB";
const PORT = process.env.PORT || 8000;

// Express
const app = express();
app.use(express.json());

// Mongo Connection
connects();

// CORS
const corsOptions = {
  origin: "*",
};
app.use(cors(corsOptions));

// BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


import CompanyRoutes from "./routes/companies";
app.use("/api/company", CompanyRoutes);

import DataRoutes from "./routes/data";
app.use("/api/data", DataRoutes);


// Error Handlings
app.use(function (req, res, next) {
  next(
    createError(
      404,
      "Invalid API. Use the official documentation to get the list of valid APIS."
    )
  );
});

// PORT
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
