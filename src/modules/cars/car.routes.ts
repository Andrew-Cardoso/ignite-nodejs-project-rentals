import { Router } from 'express';

import { categoriesRouter } from './categories/categories.routes';
import { specificationsRouter } from './specifications/specifications.routes';

const router = Router();

router.use('/categories', categoriesRouter);
router.use('/specifications', specificationsRouter);

export { router as carsRouter };
