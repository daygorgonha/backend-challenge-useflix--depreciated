import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  categoriesRepository.create({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
  const all = categoriesRepository.list();

  return response.json(all);
});

categoriesRoutes.get("/:id", (request, response) => {
  const { id } = request.params;

  const category = categoriesRepository.findById(id);

  return response.json(category);
});

categoriesRoutes.delete("/:id", (request, response) => {
  const { id } = request.params;

  categoriesRepository.delete(id);

  return response.status(200).send();
});
export { categoriesRoutes };
