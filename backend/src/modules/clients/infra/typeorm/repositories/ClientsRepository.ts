import ICreateClientDTO from "@modules/clients/dtos/ICreateClientDTO";
import IClientsRepository from "@modules/clients/repositories/IClientsRepository";
import { Repository, getRepository } from "typeorm";
import Client from "../entities/Client";

class ClientsRepository implements IClientsRepository {
    private ormRepository: Repository<Client>;
    
    constructor() {
        this.ormRepository = getRepository(Client);
    }
    
    async create(data: ICreateClientDTO): Promise<Client> {
        const client = this.ormRepository.create(data);

        await this.ormRepository.save(client);

        return client;
    }

    async findByCpf(cpf: string): Promise<Client | undefined> {
        const findClient = await this.ormRepository.findOne({
            where: {
                cpf
            }
        });

        return findClient;
    }

    async listAllClients(): Promise<Client[] | undefined> {
        const findClients = await this.ormRepository.find();

        return findClients;
    }

}

export default ClientsRepository;