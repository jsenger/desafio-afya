import ICreateClientDTO from "../dtos/ICreateClientDTO";
import IListClientWithFilterDTO from "../dtos/IListClientWithFilterDTO";
import Client from "../infra/typeorm/entities/Client";

export default interface IClientsRepository {
    create(data: ICreateClientDTO): Promise<Client>;
    findByCpf(cpf: string): Promise<Client | undefined>;
    listClients(data?: IListClientWithFilterDTO): Promise<Client[] | undefined>;
    findById(id: string): Promise<Client | undefined>;
    save(client: Client): Promise<Client>;
    count(): Promise<number>;
}