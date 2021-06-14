import IMedicalRecordHistoricRepository from "@modules/medicalRecords/repositories/IMedicalRecordHistoricRepository";
import IMedicalRecordsRepository from "@modules/medicalRecords/repositories/IMedicalRecordsRepository";
import AppError from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import MedicalCare from "../infra/typeorm/entities/MedicalCare";
import IMedicalCaresRepository from "../repositories/IMedicalCaresRepository";

interface IRequest {
    medical_care_id: string;
    status: 'AGENDADO' | 'REALIZADO' | 'CANCELADO';
}

@injectable()
class UpdateStatusMedicalCareService {
    constructor(
        @inject('MedicalCaresRepository')
        private medicalCaresRepository: IMedicalCaresRepository,

        @inject('MedicalRecordHistoricRepository')
        private medicalRecordHistoricRepository: IMedicalRecordHistoricRepository,

        @inject('MedicalRecordsRepository')
        private medicalRecordsRepository: IMedicalRecordsRepository
    ) {}

    public async execute({ medical_care_id, status }: IRequest): Promise<MedicalCare> {
        if ((status !== 'AGENDADO') && (status !== 'REALIZADO') && (status !== 'CANCELADO')) {
            throw new AppError('Invalid status name');
        }
        
        const medicalCare = await this.medicalCaresRepository.findById(medical_care_id);
        
        if (!medicalCare) {
            throw new AppError(`Medical Care not found`);
        }
        
        if (medicalCare.status === 'CANCELADO') {
            throw new AppError('This medical care already canceled');
        }

        if (medicalCare.status === 'REALIZADO') {
            throw new AppError("You can't modify a medical care appointment status where already finished");
        }

        medicalCare.status = status;

        await this.medicalCaresRepository.save(medicalCare);

        if (status === 'REALIZADO') {
            const medicalRecords = await this.medicalRecordsRepository.findByClientId(medicalCare.client_id);

            if (!medicalRecords) {
                throw new AppError('Medical Records not found');
            }

            await this.medicalRecordHistoricRepository.create({
                date: medicalCare.date,
                medical_record_id: medicalRecords.id,
                description: `Consulta médica realizada no dia ${medicalCare.date}`
            });
        }

        return medicalCare;
    }
}

export default UpdateStatusMedicalCareService;