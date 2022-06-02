import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const categoryAlreadyExists = categoriesRepository.findByName(name);

  if (categoryAlreadyExists) {
    return response.status(400).json({ error: "Category Already Exists" });
  }

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

  if (!category) {
    return response.status(400).json({ error: "Category Not Found" });
  }

  return response.json(category);
});

categoriesRoutes.delete("/:id", (request, response) => {
  const { id } = request.params;

  const categoryAlreadyExists = categoriesRepository.findById(id);

  if (!categoryAlreadyExists) {
    return response.status(400).json({ error: "Category Not Found" });
  }

  categoriesRepository.delete(id);

  return response.status(200).send();
});
export { categoriesRoutes };
