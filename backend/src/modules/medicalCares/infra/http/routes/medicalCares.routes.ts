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
            status: Joi.string().required(),
            amount: Joi.number().required(),
            description: Joi.string().allow(null).allow('').optional()
        },
    }),
    medicalCaresController.create);

medicalCaresRouter.patch(
    '/status',
    celebrate({
        [Segments.BODY]: {
            medical_care_id: Joi.string().uuid().required(),
            status: Joi.string().required()
        }
    }),
    medicalCaresController.updateStatus
)

medicalCaresRouter.put('/', medicalCaresController.updateMedicalCare);

medicalCaresRouter.get('/', medicalCaresController.list);

export default medicalCaresRouter;