import { Request, Response } from 'express';

import { categoriesRepository } from '../repository/categories.repository';
import { FindByNameCategoryService } from '../services/find-by-name.service';

export const findByNameCatagoriesController = async (request: Request, response: Response) => {
  const { name } = request.params;
  const findByNameService = FindByNameCategoryService(categoriesRepository);
  return findByNameService(response, name);
};
