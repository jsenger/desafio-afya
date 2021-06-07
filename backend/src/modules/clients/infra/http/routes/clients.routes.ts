import { Router } from 'express';
import ClientsController from '../controllers/ClientsController';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const clientsRouter = Router();
const clientsController = new ClientsController();

clientsRouter.use(ensureAuthenticated);

clientsRouter.post('/', clientsController.create);
clientsRouter.get('/', clientsController.list);
clientsRouter.put('/', clientsController.update);

export default clientsRouter;