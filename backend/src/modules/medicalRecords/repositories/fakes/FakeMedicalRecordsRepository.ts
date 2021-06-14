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
    
    public async findByClientId(client_id: string): Promise<MedicalRecords | undefined> {
        const findMedicalRecord = this.medicalRecords.find(medicalRecord => medicalRecord.client_id === client_id);
        
        return findMedicalRecord;
    }
    
    listMedicalRecords(client_id: string): Promise<MedicalRecords | undefined> {
        throw new Error('Method not implemented.');
    }
}

export default FakeMedicalRecordsRepository;