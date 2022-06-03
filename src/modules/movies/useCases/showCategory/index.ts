import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { ShowCategoryController } from "./ShowCategoryController";
import { ShowCategoryUseCase } from "./ShowCategoryUseCase";

const categoriesRepository = new CategoriesRepository();
const showCategoryUseCase = new ShowCategoryUseCase(categoriesRepository);
const showCategoryController = new ShowCategoryController(showCategoryUseCase);

export { showCategoryController };
