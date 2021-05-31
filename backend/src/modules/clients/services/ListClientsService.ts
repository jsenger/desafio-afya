import { inject, injectable } from "tsyringe";
import Client from "../infra/typeorm/entities/Client";
import IClientsRepository from "../repositories/IClientsRepository";

@injectable()
class ListClientsService {
    constructor(
        @inject('ClientsRepository')
        private clientsRepository: IClientsRepository
    ) {}

    public async execute(): Promise<Client[]> {
        const clients = await this.clientsRepository.listAllClients();

        return clients;
    }
}

export default ListClientsService;