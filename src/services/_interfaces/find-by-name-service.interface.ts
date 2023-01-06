import { Response } from 'express';

import { IRepository } from '../../modules/_interfaces/repository.interface';

export type IFindByNameService<T> = (repo: IRepository<T>) => (response: Response, name?: string) => Promise<Response>;
