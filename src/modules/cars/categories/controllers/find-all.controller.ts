import { Request, Response } from 'express';

import { ICategory } from '../interfaces/category.interface';
import { categoriesRepository } from '../repository/categories.repository';
import { FindAllCategoryService } from '../services/find-all.service';

export const findAllCatagoriesController = async (request: Request, response: Response) => {
  const { name, description } = request.query as Partial<ICategory>;
  const findAllService = FindAllCategoryService(categoriesRepository);
  return findAllService(response, { name, description });
};
