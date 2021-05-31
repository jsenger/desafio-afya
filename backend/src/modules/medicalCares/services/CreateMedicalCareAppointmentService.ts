import AppError from '@shared/errors/AppError';
import ISpecialistsRepository from '@modules/specialists/repositories/ISpecialistsRepository';
import IClientsRepository from '@modules/clients/repositories/IClientsRepository';
import { inject, injectable } from "tsyringe";
import ICreateMedicalCareDTO from "../dtos/ICreateMedicalCareDTO";
import MedicalCare from "../infra/typeorm/entities/MedicalCare";
import IMedicalCaresRepository from "../repositories/IMedicalCaresRepository";

@injectable()
class CreateMedicalCareAppointmentService {
    constructor (
        @inject('MedicalCaresRepository')
        private medicalCaresRepository: IMedicalCaresRepository,

        @inject('ClientsRepository')
        private clientsRepository: IClientsRepository,

        @inject('SpecialistsRepository')
        private specialistsRepository: ISpecialistsRepository
    ) {}
    
    public async execute({ appointment_date, date, amount, status, client_id, specialist_id }: ICreateMedicalCareDTO): Promise<MedicalCare> {
        const checkClientExists = await this.clientsRepository.findById(client_id);

        if (!checkClientExists) {
            throw new AppError('Client not found');
        }

        const checkSpecialistExists = await this.specialistsRepository.findById(specialist_id);

        if (!checkSpecialistExists) {
            throw new AppError('Specialist not found');
        }
        
        const medicalCareAppointment = await this.medicalCaresRepository.create({
            appointment_date,
            date,
            amount,
            status,
            client_id,
            specialist_id
        });

        return medicalCareAppointment;
    }
}

export default CreateMedicalCareAppointmentService;