import CreateMedicalCareAppointmentService from '@modules/medicalCares/services/CreateMedicalCareAppointmentService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class MedicalCaresController {
    public async create(request: Request, response: Response): Promise<Response> {
        const {
            appointment_date,
            date,
            amount,
            status,
            client_id,
            specialist_id
        } = request.body;

        const createMedicalCareAppointment = container.resolve(CreateMedicalCareAppointmentService);

        const medicalCareAppointment = await createMedicalCareAppointment.execute({
            appointment_date,
            date,
            amount,
            status,
            client_id,
            specialist_id
        });

        return response.json(medicalCareAppointment);
    }
}

export default MedicalCaresController;