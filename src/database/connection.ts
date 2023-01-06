import { join, resolve } from 'path';
import { Sequelize } from 'sequelize';

const path = resolve(join(__dirname, 'rentals.sqlite'));

export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path,
  logging: false,
});
