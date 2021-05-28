import ICreateClientDTO from "../dtos/ICreateClientDTO";
import Client from "../infra/typeorm/entities/Client";

export default interface IClientsRepository {
    create(data: ICreateClientDTO): Promise<Client>;
    findByCpf(cpf: string): Promise<Client | undefined>;
}