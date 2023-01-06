import { Response } from 'express';

import { IRepository } from './repository.interface';

export type IFindAllService<T> = (repo: IRepository<T>) => (response: Response, data?: Partial<T>) => Promise<Response>;
