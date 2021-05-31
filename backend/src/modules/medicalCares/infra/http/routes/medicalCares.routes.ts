import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import { Router } from 'express';
import MedicalCaresController from '../controllers/MedicalCaresController';

const medicalCaresRouter = Router();
const medicalCaresController = new MedicalCaresController();

medicalCaresRouter.use(ensureAuthenticated);

medicalCaresRouter.post('/', medicalCaresController.create);

export default medicalCaresRouter;