import { inject, injectable } from "tsyringe";
import Client from "../infra/typeorm/entities/Client";
import IClientsRepository from "../repositories/IClientsRepository";
import IListClientWithFilterDTO from "../dtos/IListClientWithFilterDTO";

@injectable()
class ListClientsService {
    constructor(
        @inject('ClientsRepository')
        private clientsRepository: IClientsRepository
    ) {}

    public async execute({ name, cpf, email, blood_type, created_at }: IListClientWithFilterDTO): Promise<Client[] | undefined> {
        const clients = await this.clientsRepository.listClients({ name, cpf, email, blood_type, created_at});

        return clients;
    }
}

export default ListClientsService;