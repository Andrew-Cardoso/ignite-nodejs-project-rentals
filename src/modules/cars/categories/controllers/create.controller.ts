import { Request, Response } from 'express';

import { categoriesRepository } from '../repository/categories.repository';
import { CreateCategoryService } from '../services/create.service';

export const createCatagoriesController = async (request: Request, response: Response) => {
  const { name, description } = request.body;
  const createService = CreateCategoryService(categoriesRepository);
  return createService(response, { name, description });
};
