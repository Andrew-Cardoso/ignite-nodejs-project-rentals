// import { Op } from 'sequelize';
import { WhereOptions } from 'sequelize';

import { IRepository } from '../../../_interfaces/repository.interface';
import { isNullOrEmpty } from '../../../../utils/is-null-or-empty';
import { ICategory } from '../interfaces/category.interface';
import { Category } from '../model/categories.model';

const buildWhere = (where?: Partial<ICategory>) => {
  const whereOptions: WhereOptions<Category> = {};

  if (!isNullOrEmpty(where?.name))
    // TODO - Does not work with Sqlite. Remember to add this when switching to Postgres on deploy
    // whereOptions.name = { [Op.iLike]: `%${where!.name}%` };
    whereOptions.name = where!.name;

  if (!isNullOrEmpty(where?.description))
    // TODO - Does not work with Sqlite. Remember to add this when switching to Postgres on deploy
    //  whereOptions.description = { [Op.iLike]: `%${where!.description}%` };
    whereOptions.description = where!.description;

  return whereOptions;
};

export const categoriesRepository: IRepository<ICategory> = {
  create: ({ description, name }) =>
    Category.create({
      name,
      description,
    }),
  findAll: (where?: Partial<ICategory>) => Category.findAll({ where: buildWhere(where) }),
  findByName: (name: string): Promise<ICategory | null> => Category.findOne({ where: { name } }),
};
