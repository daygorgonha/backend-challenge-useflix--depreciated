import { Category } from "../../models/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
  id: string;
}

class ShowCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}
  execute({ id }: IRequest): Category {
    const category = this.categoriesRepository.findById(id);

    return category;
  }
}

export { ShowCategoryUseCase };
