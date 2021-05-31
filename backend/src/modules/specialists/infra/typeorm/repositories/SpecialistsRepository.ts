import ICreateSpecialistDTO from "@modules/specialists/dtos/ICreateSpecialistDTO";
import ISpecialistsRepository from "@modules/specialists/repositories/ISpecialistsRepository";
import { Repository, getRepository } from "typeorm";
import Specialist from "../entities/Specialist";

class SpecialistsRepository implements ISpecialistsRepository {
    private ormRepository: Repository<Specialist>;
    
    constructor() {
        this.ormRepository = getRepository(Specialist);
    }
    
    async create(data: ICreateSpecialistDTO): Promise<Specialist> {
        const specialist = this.ormRepository.create(data);

        await this.ormRepository.save(specialist);

        return specialist;
    }

    async findByRegister(register: string): Promise<Specialist | undefined> {
        const findSpecialist = await this.ormRepository.findOne({
            where: {
                register
            }
        });

        return findSpecialist;
    }

}

export default SpecialistsRepository;