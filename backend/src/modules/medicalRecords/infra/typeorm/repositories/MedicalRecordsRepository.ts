import { getRepository, Repository } from 'typeorm';
import ICreateMedicalRecordsDTO from "@modules/medicalRecords/dtos/ICreateMedicalRecordsDTO";
import IMedicalRecordsRepository from "@modules/medicalRecords/repositories/IMedicalRecordsRepository";
import MedicalRecords from "../entities/MedicalRecords";

class MedicalRecordsRepository implements IMedicalRecordsRepository {
    private ormRepository: Repository<MedicalRecords>;

    constructor() {
        this.ormRepository = getRepository(MedicalRecords);
    }
    
    async create(data: ICreateMedicalRecordsDTO): Promise<MedicalRecords> {
        const medicalRecords = this.ormRepository.create(data);
        
        await this.ormRepository.save(medicalRecords);
        
        return medicalRecords;
    }
    
    public async findByClientId(client_id: string): Promise<MedicalRecords | undefined> {
        const findMedicalRecord = await this.ormRepository.findOne({
            where: {
                client_id
            }
        });
        
        return findMedicalRecord;
    }
    
    public async listMedicalRecords(client_id: string): Promise<MedicalRecords | undefined> {
        const medicalRecords = await this.ormRepository.findOne({
            where: {
                client_id
            },
            relations: ['client', 'medicalRecordHistoric', 'medicalRecordHistoric.specialist'],
            order: {
                
            }
        });

        return medicalRecords;
    }
}

export default MedicalRecordsRepository;