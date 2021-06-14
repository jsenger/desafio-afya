import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import MedicalRecordsController from '../controllers/MedicalRecordsController';

const medicalRecordsRouter = Router();
const medicalRecordsController = new MedicalRecordsController();

medicalRecordsRouter.use(ensureAuthenticated);

medicalRecordsRouter.get(
    '/', 
    celebrate({
        [Segments.QUERY]: {
            client_id: Joi.string().required()
        }
    }),
    medicalRecordsController.list);

export default medicalRecordsRouter;