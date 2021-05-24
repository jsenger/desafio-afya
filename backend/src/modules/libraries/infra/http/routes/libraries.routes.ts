import { Router } from 'express';

import LibrariesController from '../controller/LibrariesController';

const librariesRouter = Router();
const librariesController = new LibrariesController();

librariesRouter.post('/', librariesController.create);

export default librariesRouter;
