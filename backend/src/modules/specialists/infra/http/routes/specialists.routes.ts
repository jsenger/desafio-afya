import { Router } from 'express';
import SpecialistsController from '../controllers/SpecialistsController';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const specialistsRouter = Router();
const specialistsController = new SpecialistsController();

specialistsRouter.use(ensureAuthenticated);

specialistsRouter.post('/', specialistsController.create);
specialistsRouter.get('/', specialistsController.list);

export default specialistsRouter;