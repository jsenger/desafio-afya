import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import { Router } from 'express';
import ProfessionsController from '../controllers/ProfessionsController';

const professionsRouter = Router();
const professionsController = new ProfessionsController();

professionsRouter.use(ensureAuthenticated);

professionsRouter.get('/', professionsController.list);
professionsRouter.post('/', professionsController.create);

export default professionsRouter;