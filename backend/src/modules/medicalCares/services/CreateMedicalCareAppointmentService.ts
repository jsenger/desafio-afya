import { isBefore, startOfHour, getMinutes, setMinutes } from 'date-fns';

import AppError from '@shared/errors/AppError';
import ISpecialistsRepository from '@modules/specialists/repositories/ISpecialistsRepository';
import IClientsRepository from '@modules/clients/repositories/IClientsRepository';
import { inject, injectable } from "tsyringe";
import ICreateMedicalCareDTO from "../dtos/ICreateMedicalCareDTO";
import MedicalCare from "../infra/typeorm/entities/MedicalCare";
import IMedicalCaresRepository from "../repositories/IMedicalCaresRepository";

interface IRequest {
    date: Date;
    amount: number;
    status: 'AGENDADO' | 'REALIZADO' | 'CANCELADO';
    client_id: string;
    specialist_id: string; 
    description: string;
}

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
    
    public async execute({ date, amount, status, client_id, specialist_id, description }: IRequest): Promise<MedicalCare> {
        const minutes = getMinutes(date);

        if(minutes < 30) {
            var appointmentDate = startOfHour(date);
        } else {
            var appointmentDate = setMinutes(startOfHour(date), 30);
        }

        if (isBefore(appointmentDate, Date.now())) {
            throw new AppError("You can't create an appointment on a past date");
        }

        const checkClientExists = await this.clientsRepository.findById(client_id);

        if (!checkClientExists) {
            throw new AppError('Client not found');
        }

        const checkSpecialistExists = await this.specialistsRepository.findById(specialist_id);

        if (!checkSpecialistExists) {
            throw new AppError('Specialist not found');
        }

        const findMedicalCareAppointmentInSameDate = await this.medicalCaresRepository.findByDate(appointmentDate, specialist_id);

        if (findMedicalCareAppointmentInSameDate) {
            throw new AppError('This appointment is already booked');
        }

        const appointment_date = new Date();
        
        const medicalCareAppointment = await this.medicalCaresRepository.create({
            appointment_date,
            date: appointmentDate,
            amount,
            status,
            client_id,
            specialist_id
        });

        return medicalCareAppointment;
    }
}

export default CreateMedicalCareAppointmentService;