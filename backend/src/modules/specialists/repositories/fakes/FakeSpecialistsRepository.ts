import { v4 as uuid } from 'uuid';

import ICreateSpecialistDTO from "@modules/specialists/dtos/ICreateSpecialistDTO";
import Specialist from "@modules/specialists/infra/typeorm/entities/Specialist";
import ISpecialistsRepository from "../ISpecialistsRepository";

class FakeSpecialistsRepository implements ISpecialistsRepository {
    specialists: Specialist[] = [];
    
    public async create(data: ICreateSpecialistDTO): Promise<Specialist> {
        const specialist = new Specialist();

        Object.assign(specialist, { id: uuid() }, data);

        this.specialists.push(specialist);

        return specialist;
    }

    public async findByRegister(register: string): Promise<Specialist | undefined> {
        const specialist = this.specialists.find(specialist => specialist.register === register);

        return specialist;
    }

    public async findById(id: string): Promise<Specialist | undefined> {
        const specialist = this.specialists.find(specialist => specialist.id === id);

        return specialist;
    }

}

export default FakeSpecialistsRepository;