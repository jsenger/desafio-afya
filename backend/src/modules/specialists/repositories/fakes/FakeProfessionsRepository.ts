import Profession from "@modules/specialists/infra/typeorm/entities/Profession";
import { v4 as uuid } from "uuid";
import IProfessionsRepository from "../IProfessionsRepository";

class FakeProfessionsRepository implements IProfessionsRepository {
    professions: Profession[] = [];
    
    async create(name: string): Promise<Profession> {
        const profession = new Profession();

        Object.assign(profession, { id: uuid(), name });

        this.professions.push(profession);

        return profession;
    }

    async findByName(name: string): Promise<Profession | undefined> {
        const profession = this.professions.find((profession) => profession.name === name);

        return profession;
    }

    async list(): Promise<Profession[] | undefined> {
        const professions = this.professions;
        
        return professions;
    }

}

export default FakeProfessionsRepository;