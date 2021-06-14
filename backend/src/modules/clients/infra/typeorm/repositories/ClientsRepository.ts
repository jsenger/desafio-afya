import ICreateClientDTO from "@modules/clients/dtos/ICreateClientDTO";
import IListClientWithFilterDTO from "@modules/clients/dtos/IListClientWithFilterDTO";
import IClientsRepository from "@modules/clients/repositories/IClientsRepository";
import { Repository, getRepository, ILike } from "typeorm";
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
                var findClient = await this.ormRepository.find({
                    relations: ['address']
                });
            } else {
                var findClient = await this.ormRepository.find({
                    where: [
                        {name: ILike(`%${name}%`)},
                        {cpf: ILike(`%${cpf}%`)},
                        {email: ILike(`%${email}%`)},
                        {blood_type},
                        {created_at},
                    ],
                    relations: ['address']
                });
            }
            
            return findClient;
        }
        
        async findById(id: string): Promise<Client | undefined> {
            const findClient = await this.ormRepository.findOne(id);
            
            return findClient;
        }
        
        async save(client: Client): Promise<Client> {
            return this.ormRepository.save(client);
        }
        
        async count(): Promise<number> {
            const quantity = await this.ormRepository.count();

            return quantity;
        }
    }
    
    export default ClientsRepository;