import { join, resolve } from 'path';
import { Sequelize } from 'sequelize';

const path = resolve(join(__dirname, 'rentals.sqlite'));
console.log(path);

export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path,
  logging: false,
});
