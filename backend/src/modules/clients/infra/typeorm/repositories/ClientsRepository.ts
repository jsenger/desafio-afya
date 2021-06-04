import ICreateClientDTO from "@modules/clients/dtos/ICreateClientDTO";
import IListClientWithFilterDTO from "@modules/clients/dtos/IListClientWithFilterDTO";
import IClientsRepository from "@modules/clients/repositories/IClientsRepository";
import { Repository, getRepository, Like } from "typeorm";
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
    
    async listClients({ name, cpf, email, blood_type, created_at }: IListClientWithFilterDTO): Promise<Client[] | undefined> {
        if (
            !name &&
            !cpf &&
            !email &&
            !blood_type &&
            !created_at
            ) {
                var findClient = await this.ormRepository.find();
            } else {
                var findClient = await this.ormRepository.find({
                    where: [
                        {name},
                        {name: Like(`%${name}%`)},
                        {name: Like(`${name}%`)},
                        {name: Like(`%${name}`)},
                        {cpf},
                        {cpf: Like(`%${cpf}%`)},
                        {cpf: Like(`${cpf}%`)},
                        {cpf: Like(`%${cpf}`)},
                        {email},
                        {email: Like(`%${email}%`)},
                        {email: Like(`${email}%`)},
                        {email: Like(`%${email}`)},
                        {blood_type},
                        {created_at},
                    ],
                });
            }

        return findClient;
    }
    
    async findById(id: string): Promise<Client> {
        const findClient = await this.ormRepository.findOne(id);
        
        return findClient;
    }
}

export default ClientsRepository;