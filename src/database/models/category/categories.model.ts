import { DataTypes, Model } from 'sequelize';

import { sequelize } from '../../connection';
import { ICategory } from './category.interface';

class Category extends Model implements ICategory {
  declare id: string;
  declare name: string;
  declare description: string;
  declare updatedAt: Date;
  declare readonly createdAt: Date;
}

Category.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
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
    modelName: 'Category',
    tableName: 'categories',
  },
);

Category.sync(process.env.ENV === 'dev' ? { alter: true } : undefined);

export { Category };
