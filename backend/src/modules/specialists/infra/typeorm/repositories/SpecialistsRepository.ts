import ICreateSpecialistDTO from "@modules/specialists/dtos/ICreateSpecialistDTO";
import IListSpecialistWithFilterDTO from "@modules/specialists/dtos/IListSpecialistWithFilterDTO";
import ISpecialistsRepository from "@modules/specialists/repositories/ISpecialistsRepository";
import { Repository, getRepository, ILike } from "typeorm";
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
    
    async findById(id: string): Promise<Specialist | undefined> {
        const findSpecialist = await this.ormRepository.findOne(id);
        
        return findSpecialist;
    }
    
    async list({ name, register, email, created_at }: IListSpecialistWithFilterDTO): Promise<Specialist[] | undefined> {
        if (
            !name &&
            !register &&
            !email &&
            !created_at
            ) {
                var findSpecialist = await this.ormRepository.find({
                    relations: ['address', 'profession']
                });
            } else {
                var findSpecialist = await this.ormRepository.find({
                    where: [
                        {name: ILike(`%${name}%`)},
                        {register: ILike(`%${register}%`)},
                        {email: ILike(`%${email}%`)},
                        {created_at},
                    ],
                    relations: ['address', 'profession']
                });
            }

        return findSpecialist;
    }
}

export default SpecialistsRepository;