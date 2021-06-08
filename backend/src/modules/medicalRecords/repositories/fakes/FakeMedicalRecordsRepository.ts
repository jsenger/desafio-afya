import { v4 as uuid } from 'uuid';

import ICreateMedicalRecordsDTO from "@modules/medicalRecords/dtos/ICreateMedicalRecordsDTO";
import MedicalRecords from "@modules/medicalRecords/infra/typeorm/entities/MedicalRecords";
import IMedicalRecordsRepository from "../IMedicalRecordsRepository";

class FakeMedicalRecordsRepository implements IMedicalRecordsRepository {
    medicalRecords: MedicalRecords[] = [];
    
    public async create(data: ICreateMedicalRecordsDTO): Promise<MedicalRecords> {
        const medicalRecords = new MedicalRecords();

        Object.assign(medicalRecords, { id: uuid() }, data);

        this.medicalRecords.push(medicalRecords);

        return medicalRecords;
    }
}

export default FakeMedicalRecordsRepository;