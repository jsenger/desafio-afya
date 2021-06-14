import { v4 as uuid } from 'uuid';

import ICreateMedicalRecordHistoricDTO from "@modules/medicalRecords/dtos/ICreateMedicalRecordHistoricDTO";
import MedicalRecordHistoric from "@modules/medicalRecords/infra/typeorm/entities/MedicalRecordHistoric";
import IMedicalRecordHistoricRepository from "../IMedicalRecordHistoricRepository";

class FakeMedicalRecordHistoricRepository implements IMedicalRecordHistoricRepository {
    medicalRecordsHistoric: MedicalRecordHistoric[] = [];
    
    public async create(data: ICreateMedicalRecordHistoricDTO): Promise<MedicalRecordHistoric> {
        const medicalRecordsHistoric = new MedicalRecordHistoric();

        Object.assign(medicalRecordsHistoric, { id: uuid() }, data);

        this.medicalRecordsHistoric.push(medicalRecordsHistoric);

        return medicalRecordsHistoric;
    }
}

export default FakeMedicalRecordHistoricRepository;