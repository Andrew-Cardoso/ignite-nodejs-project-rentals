import { Response } from 'express';

import { IRepository } from '../../modules/_interfaces/repository.interface';

export type IFindAllService<T> = (repo: IRepository<T>) => (response: Response, data?: Partial<T>) => Promise<Response>;
