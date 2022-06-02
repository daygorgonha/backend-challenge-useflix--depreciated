import { Router } from "express";

const categoriesRoutes = Router();

categoriesRoutes.post("/", (request, response) => {
  return response.status(201).send();
});

export { categoriesRoutes };