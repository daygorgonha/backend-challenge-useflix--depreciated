import { Router } from "express";

import { createCategoryController } from "../modules/movies/useCases/createCategory";
import { deleteCategoryController } from "../modules/movies/useCases/deleteCategory";
import { listCategoriesController } from "../modules/movies/useCases/listCategories";
import { showCategoryController } from "../modules/movies/useCases/showCategory";

const categoriesRoutes = Router();

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  return listCategoriesController.handle(request, response);
});

categoriesRoutes.get("/:id", (request, response) => {
  return showCategoryController.handle(request, response);
});

categoriesRoutes.delete("/:id", (request, response) => {
  return deleteCategoryController.handle(request, response);
});

export { categoriesRoutes };
