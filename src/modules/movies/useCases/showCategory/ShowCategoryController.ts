import { Request, Response } from "express";

import { ShowCategoryUseCase } from "./ShowCategoryUseCase";

class ShowCategoryController {
  constructor(private showCategoryUseCase: ShowCategoryUseCase) {}

  handle(request: Request, response: Response): Response {
    const { id } = request.params;

    const category = this.showCategoryUseCase.execute({ id });

    if (!category) {
      return response.status(400).json({ error: "Category Not Found" });
    }

    return response.json(category);
  }
}

export { ShowCategoryController };
