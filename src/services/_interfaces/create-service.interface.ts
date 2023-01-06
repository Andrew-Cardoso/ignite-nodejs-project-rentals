import { Response } from 'express';

import { ICreateEntity } from '../../modules/_interfaces/create-entity.interface';
import { IRepository } from '../../modules/_interfaces/repository.interface';

export type ICreateService<T> = (
  repo: IRepository<T>,
) => (response: Response, data: ICreateEntity<T>) => Promise<Response>;
