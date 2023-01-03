/* eslint-disable import/first */
/* eslint-disable import-helpers/order-imports */
/* eslint-disable import/newline-after-import */
/* eslint-disable prettier/prettier */

import * as dotenv from 'dotenv';
dotenv.config();

import * as express from 'express';
import { categoriesRouter } from './routes/categories.routes';

const app = express();

app.use(express.json());

app.use('/categories', categoriesRouter);

const port = process.env.PORT;
app.listen(port, () => console.log('Server started on port %d!', port));
