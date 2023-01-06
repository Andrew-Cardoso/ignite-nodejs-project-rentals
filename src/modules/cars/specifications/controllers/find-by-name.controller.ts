import { Request, Response } from 'express';

import { specificationsRepository } from '../repository/specifications.repository';
import { FindByNameSpecificationService } from '../services/find-by-name.service';

export const findByNameSpecificationsController = async (request: Request, response: Response) => {
  const { name } = request.params;
  const findByNameService = FindByNameSpecificationService(specificationsRepository);
  return findByNameService(response, name);
};
