import express from "express";

import { createConnection } from "./database";
import { categoriesRoutes } from "./routes/categories.routes";

const app = express();

app.use(express.json());

app.use("/categories", categoriesRoutes);

app.listen(3333, () => {
  createConnection.sync();
  console.log("Server is running!");
});
