import { getRepository, Repository } from 'typeorm';
import ICreateMedicalCareDTO from "@modules/medicalCares/dtos/ICreateMedicalCareDTO";
import IMedicalCaresRepository from "@modules/medicalCares/repositories/IMedicalCaresRepository";
import MedicalCare from "../entities/MedicalCare";

class MedicalCaresRepository implements IMedicalCaresRepository {
    private ormRepository: Repository<MedicalCare>;

    constructor() {
        this.ormRepository = getRepository(MedicalCare);
    }

    public async create(data: ICreateMedicalCareDTO): Promise<MedicalCare> {
        const medicalCare = this.ormRepository.create(data);

        await this.ormRepository.save(medicalCare);

        return medicalCare;
    }

    public async findByDate(date: Date, specialist_id: string): Promise<MedicalCare | undefined> {
        const findMedicalCare = await this.ormRepository.findOne({
            where: {
                date,
                specialist_id
            },
        });

        return findMedicalCare;
    }
}

export default MedicalCaresRepository;