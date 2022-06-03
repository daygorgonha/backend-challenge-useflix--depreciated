import { Request, Response } from "express";

import { DeleteCategoryUseCase } from "./DeleteCategoryUseCase";

class DeleteCategoryController {
  constructor(private deleteCategoryUseCase: DeleteCategoryUseCase) {}

  handle(request: Request, response: Response): Response {
    const { id } = request.params;

    this.deleteCategoryUseCase.execute({ id });

    return response.status(200).send();
  }
}

export { DeleteCategoryController };
