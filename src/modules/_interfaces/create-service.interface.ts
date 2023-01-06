import { Response } from 'express';

import { ICreateEntity } from './create-entity.interface';
import { IRepository } from './repository.interface';

export type ICreateService<T> = (
  repo: IRepository<T>,
) => (response: Response, data: ICreateEntity<T>) => Promise<Response>;
