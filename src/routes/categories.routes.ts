import { Router } from 'express';

import { categoriesRepository } from '../database/models/category/categories.repository';
import { ICategory } from '../database/models/category/category.interface';

const router = Router();

router.get('/', async (request, response) => {
  const { name, description } = request.query as Partial<ICategory>;

  const categories = await categoriesRepository.findAll({ name, description });
  return response.json(categories);
});

router.post('/', async (request, response) => {
  const { name, description } = request.body;

  try {
    const category = await categoriesRepository.create({ name, description });
    return response.status(201).json(category);
  } catch (error) {
    const sqlError = error as Record<string, unknown>;
    switch (sqlError.name) {
      case 'SequelizeUniqueConstraintError':
        return response.status(409).json({ error: 'Category already exists' });
      case 'SequelizeValidationError':
        console.log(sqlError);
        return response
          .status(400)
          .json({ error: (<Record<string, unknown>[]>sqlError.errors)?.map((e) => e?.message).join('\n') });
      default:
        return response.status(500).json({ error: 'Internal server error' });
    }
  }
});

export { router as categoriesRouter };
