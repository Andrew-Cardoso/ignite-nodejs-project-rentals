// import { Op } from 'sequelize';
import { WhereOptions } from 'sequelize';

import { IRepository } from '../../../_interfaces/repository.interface';
import { isNullOrEmpty } from '../../../../utils/is-null-or-empty';
import { ISpecification } from '../interfaces/specification.interface';
import { Specification } from '../model/specifications.model';

const buildWhere = (where?: Partial<ISpecification>) => {
  const whereOptions: WhereOptions<Specification> = {};

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

export const specificationsRepository: IRepository<ISpecification> = {
  create: ({ description, name }) =>
    Specification.create({
      name,
      description,
    }),
  findAll: (where) => Specification.findAll({ where: buildWhere(where) }),
  findByName: (name) => Specification.findOne({ where: { name } }),
};
