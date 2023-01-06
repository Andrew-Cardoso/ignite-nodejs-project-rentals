import { ICreateEntity } from './create-entity.interface';

export interface IRepository<T> {
  create(data: ICreateEntity<T>): Promise<T>;
  findAll(where?: Partial<T>): Promise<T[]>;
  findByName(name: string): Promise<T | null>;
}
