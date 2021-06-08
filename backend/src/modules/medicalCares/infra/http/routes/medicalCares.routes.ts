import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import MedicalCaresController from '../controllers/MedicalCaresController';

const medicalCaresRouter = Router();
const medicalCaresController = new MedicalCaresController();

medicalCaresRouter.use(ensureAuthenticated);

medicalCaresRouter.post(
    '/',
    celebrate({
        [Segments.BODY]: {
            date: Joi.date(),
            client_id: Joi.string().uuid().required(),
            specialist_id: Joi.string().uuid().required(),
            status: Joi.string(),
            amount: Joi.number(),
        },
    }),
    medicalCaresController.create);

export default medicalCaresRouter;