import { Router, Request, Response } from 'express';
import { routerApi } from './api.routes';

const router = Router();

router.use('/', routerApi);

export { router };

