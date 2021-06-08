import { inject, injectable } from "tsyringe";
import Specialist from "../infra/typeorm/entities/Specialist";
import ISpecialistsRepository from "../repositories/ISpecialistsRepository";
import IListSpecialistWithFilterDTO from "../dtos/IListSpecialistWithFilterDTO";

@injectable()
class ListSpecialistsService {
    constructor(
        @inject('SpecialistsRepository')
        private specialistsRepository: ISpecialistsRepository
    ) {}
    public async execute({ name, register, email, created_at }: IListSpecialistWithFilterDTO): Promise<Specialist[] | undefined> {
        const specialists = await this.specialistsRepository.list({ name, register, email, created_at});

        return specialists;
    }
}

export default ListSpecialistsService;