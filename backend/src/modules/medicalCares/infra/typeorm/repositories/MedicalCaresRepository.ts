import { getRepository, Repository } from 'typeorm';
import ICreateMedicalCareDTO from "@modules/medicalCares/dtos/ICreateMedicalCareDTO";
import IMedicalCaresRepository from "@modules/medicalCares/repositories/IMedicalCaresRepository";
import MedicalCare from "../entities/MedicalCare";

class MedicalCaresRepository implements IMedicalCaresRepository {
    private ormRepository: Repository<MedicalCare>;

    constructor() {
        this.ormRepository = getRepository(MedicalCare);
    }

    async create(data: ICreateMedicalCareDTO): Promise<MedicalCare> {
        const medicalCare = this.ormRepository.create(data);

        await this.ormRepository.save(medicalCare);

        return medicalCare;
    }
}

export default MedicalCaresRepository;