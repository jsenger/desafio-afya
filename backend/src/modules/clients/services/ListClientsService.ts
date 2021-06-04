import { inject, injectable } from "tsyringe";
import Client from "../infra/typeorm/entities/Client";
import IClientsRepository from "../repositories/IClientsRepository";
import { Get, Route } from "tsoa";
import IListClientWithFilterDTO from "../dtos/IListClientWithFilterDTO";

@Route('/clients')
@injectable()
class ListClientsService {
    constructor(
        @inject('ClientsRepository')
        private clientsRepository: IClientsRepository
    ) {}

    @Get('/')
    public async execute({ name, cpf, email, blood_type, created_at }: IListClientWithFilterDTO): Promise<Client[]> {
        const clients = await this.clientsRepository.listClients({ name, cpf, email, blood_type, created_at});

        return clients;
    }
}

export default ListClientsService;