import { Category } from "../models/Category";

export interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  findByName(name: string): Category;
  findById(id: string): Category;
  list(): Category[];
  create({ name, description }: ICreateCategoryDTO): void;
  delete(category: Category): void;
}

export { ICategoriesRepository };
