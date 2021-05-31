import { getRepository, Repository } from 'typeorm';
import ICreateMedicalRecordHistoricDTO from "@modules/medicalRecords/dtos/ICreateMedicalRecordHistoricDTO";
import IMedicalRecordHistoricRepository from "@modules/medicalRecords/repositories/IMedicalRecordHistoricRepository";
import MedicalRecordHistoric from "../entities/MedicalRecordHistoric";

class MedicalRecordHistoricRepository implements IMedicalRecordHistoricRepository {
    private ormRepository: Repository<MedicalRecordHistoric>;

    constructor() {
        this.ormRepository = getRepository(MedicalRecordHistoric);
    }
    
    async create(data: ICreateMedicalRecordHistoricDTO): Promise<MedicalRecordHistoric> {
        const medicalRecordHistoric = this.ormRepository.create(data);

        await this.ormRepository.save(medicalRecordHistoric);

        return medicalRecordHistoric;
    }

}

export default MedicalRecordHistoricRepository;