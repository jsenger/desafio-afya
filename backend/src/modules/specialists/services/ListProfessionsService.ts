import { inject, injectable } from "tsyringe";
import Profession from "../infra/typeorm/entities/Profession";
import IProfessionsRepository from "../repositories/IProfessionsRepository";

@injectable()
class ListProfessionsService {
    constructor(
        @inject('ProfessionsRepository')
        private professionsRepository: IProfessionsRepository
    ) {}

    public async execute(): Promise<Profession[] | undefined> {
        const professions = await this.professionsRepository.list();

        return professions;
    }
}

export default ListProfessionsService;