import { v4 as uuid } from 'uuid';

import ICreateClientDTO from "@modules/clients/dtos/ICreateClientDTO";
import IListClientWithFilterDTO from "@modules/clients/dtos/IListClientWithFilterDTO";
import Client from "@modules/clients/infra/typeorm/entities/Client";
import IClientsRepository from "../IClientsRepository";

class FakeClientsRepository implements IClientsRepository {
    clients: Client[] = [];
    
    public async create(data: ICreateClientDTO): Promise<Client> {
        const client = new Client();
        
        Object.assign(client, { id: uuid() }, data);
        
        this.clients.push(client);
        
        return client;
    }
    
    public async findByCpf(cpf: string): Promise<Client | undefined> {
        const client = this.clients.find(client => client.cpf === cpf);
        
        return client;
    }
    
    public async listClients(data?: IListClientWithFilterDTO): Promise<Client[] | undefined> {
        return this.clients;
    }
    
    public async findById(id: string): Promise<Client | undefined> {
        const client = this.clients.find(client => client.id === id);
        
        return client;
    }
    
    public async save(client: Client): Promise<Client> {
        const findIndex = this.clients.findIndex(findClient => findClient.id === client.id);
        
        this.clients[findIndex] = client;
        
        return this.clients[findIndex];
    }
    
    public async count(): Promise<number> {
        const quantity = this.clients.length;

        return quantity;
    }
}

export default FakeClientsRepository;