import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { CreateCategoryService } from "../services/CreateCategoryService";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);

  createCategoryService.execute({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
  const all = categoriesRepository.list();

  return response.json(all);
});

categoriesRoutes.get("/:id", (request, response) => {
  const { id } = request.params;

  const category = categoriesRepository.findById(id);

  if (!category) {
    return response.status(400).json({ error: "Category Not Found" });
  }

  return response.json(category);
});

categoriesRoutes.delete("/:id", (request, response) => {
  const { id } = request.params;

  const category = categoriesRepository.findById(id);

  if (!category) {
    return response.status(400).json({ error: "Category Not Found" });
  }

  categoriesRepository.delete(category);

  return response.status(200).send();
});
export { categoriesRoutes };
