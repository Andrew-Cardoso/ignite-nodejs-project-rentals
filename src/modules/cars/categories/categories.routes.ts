import { Router } from 'express';

import { createCatagoriesController } from './controllers/create.controller';
import { findAllCatagoriesController } from './controllers/find-all.controller';
import { findByNameCatagoriesController } from './controllers/find-by-name.controller';

const router = Router();

router.get('/', findAllCatagoriesController);
router.get('/:name', findByNameCatagoriesController);

router.post('/', createCatagoriesController);

export { router as categoriesRouter };
