import { Router } from 'express';

import { createSpecificationsController } from './controllers/create.controller';
import { findAllSpecificationsController } from './controllers/find-all.controller';
import { findByNameSpecificationsController } from './controllers/find-by-name.controller';

const router = Router();

router.get('/', findAllSpecificationsController);
router.get('/:name', findByNameSpecificationsController);

router.post('/', createSpecificationsController);

export { router as specificationsRouter };
