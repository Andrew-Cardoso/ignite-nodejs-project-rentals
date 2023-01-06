import { Request, Response } from 'express';

import { ISpecification } from '../interfaces/specification.interface';
import { specificationsRepository } from '../repository/specifications.repository';
import { FindAllSpecificationService } from '../services/find-all.service';

export const findAllSpecificationsController = async (request: Request, response: Response) => {
  const { name, description } = request.query as Partial<ISpecification>;
  const findAllService = FindAllSpecificationService(specificationsRepository);
  return findAllService(response, { name, description });
};
