import IProfessionsRepository from "@modules/specialists/repositories/IProfessionsRepository";
import { getRepository, Repository } from "typeorm";
import Profession from "../entities/Profession";

class ProfessionsRepository implements IProfessionsRepository {
    private ormRepository: Repository<Profession>;

    constructor() {
        this.ormRepository = getRepository(Profession);
    }
    
    async create(name: string): Promise<Profession> {
        const profession = this.ormRepository.create({name});
        
        await this.ormRepository.save(profession);
        
        return profession;
    }
    
    async findByName(name: string): Promise<Profession | undefined> {
        const profession = await this.ormRepository.findOne({
            where: {
                name
            }
        });
        
        return profession;
    }
    
    async list(): Promise<Profession[] | undefined> {
        const professions = await this.ormRepository.find();

        return professions;
    }
}

export default ProfessionsRepository;