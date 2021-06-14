import IMedicalRecordHistoricRepository from "@modules/medicalRecords/repositories/IMedicalRecordHistoricRepository";
import IMedicalRecordsRepository from "@modules/medicalRecords/repositories/IMedicalRecordsRepository";
import AppError from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import MedicalCare from "../infra/typeorm/entities/MedicalCare";
import IMedicalCaresRepository from "../repositories/IMedicalCaresRepository";

interface IRequest {
    id: string;
    date: Date;
    amount: number;
    status: 'AGENDADO' | 'REALIZADO' | 'CANCELADO';
    client_id: string;
    specialist_id: string;
    description?: string;
}

@injectable()
class UpdateMedicalCareService {
    constructor (
        @inject('MedicalCaresRepository')
        private medicalCaresRepository: IMedicalCaresRepository,

        @inject('MedicalRecordsRepository')
        private medicalRecordsRepository: IMedicalRecordsRepository,

        @inject('MedicalRecordHistoricRepository')
        private medicalRecordHistoricRepository: IMedicalRecordHistoricRepository
    ) {}

    public async execute({ id, date, amount, status, client_id, specialist_id, description }: IRequest): Promise<MedicalCare> {
        const medicalCare = await this.medicalCaresRepository.findById(id);

        if(!medicalCare) {
            throw new AppError('Medical Care not found');
        }

        if (medicalCare.status === 'CANCELADO') {
            throw new AppError('This medical care already canceled');
        }

        if (medicalCare.status === 'REALIZADO') {
            throw new AppError("You can't modify a medical care appointment status where already finished");
        }
        
        if (status === 'REALIZADO') {
            const medicalRecords = await this.medicalRecordsRepository.findByClientId(medicalCare.client_id);
            
            if (!medicalRecords) {
                throw new AppError('Medical Records not found');
            }
            
            if(!description) {
                throw new AppError('Description undefined');
            }
            
            await this.medicalRecordHistoricRepository.create({
                date: medicalCare.date,
                medical_record_id: medicalRecords.id,
                description,
                specialist_id: medicalCare.specialist_id,
                medical_care_id: medicalCare.id
            });
        }

        medicalCare.status = status;
        medicalCare.date = date;
        medicalCare.amount = amount;
        medicalCare.client_id = client_id;
        medicalCare.specialist_id = specialist_id;
        
        return await this.medicalCaresRepository.save(medicalCare);
    }
}

export default UpdateMedicalCareService;