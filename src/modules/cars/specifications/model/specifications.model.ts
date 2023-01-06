import { DataTypes, Model } from 'sequelize';

import { sequelize } from '../../../../database/connection';
import { ISpecification } from '../interfaces/specification.interface';

class Specification extends Model implements ISpecification {
  declare id: string;
  declare name: string;
  declare description: string;
  declare updatedAt: Date;
  declare readonly createdAt: Date;
}

Specification.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      validate: {
        isUUID: 4,
        notNull: true,
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: 'Specification',
    tableName: 'specifications',
  },
);

Specification.sync(process.env.ENV === 'dev' ? { alter: true } : undefined);

export { Specification };
