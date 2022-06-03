import { Category } from "../../models/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
  id: string;
}

class DeleteCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}
  execute({ id }: IRequest): void {
    const category = this.categoriesRepository.findById(id);

    if (!category) {
      throw new Error("Category Not Found");
    }

    this.categoriesRepository.removeById(category);
  }
}

export { DeleteCategoryUseCase };
