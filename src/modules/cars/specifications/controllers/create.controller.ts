import { Request, Response } from 'express';

import { specificationsRepository } from '../repository/specifications.repository';
import { CreateSpecificationService } from '../services/create.service';

export const createSpecificationsController = async (request: Request, response: Response) => {
  const { name, description } = request.body;
  const createService = CreateSpecificationService(specificationsRepository);
  return createService(response, { name, description });
};
