import AppError from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import Profession from "../infra/typeorm/entities/Profession";
import IProfessionsRepository from "../repositories/IProfessionsRepository";

@injectable()
class CreateProfessionService {
    constructor(
        @inject('ProfessionsRepository')
        private professionsRepository: IProfessionsRepository
    ) {}

    public async execute(name: string): Promise<Profession> {
        const checkProfessionExists = await this.professionsRepository.findByName(name);

        if(checkProfessionExists) {
            throw new AppError('Profession already booked with this name');
        }

        const profession = await this.professionsRepository.create(name);

        return profession;
    }
}

export default CreateProfessionService;