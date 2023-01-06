import { Router } from 'express';

import { carsRouter } from './modules/cars/car.routes';

const router = Router();

router.use('/cars', carsRouter);

export { router as routes };
