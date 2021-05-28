import { inject, injectable } from "tsyringe";
import AppError from "@shared/errors/AppError";
import ICreateClientDTO from "../dtos/ICreateClientDTO";
import Client from "../infra/typeorm/entities/Client";
import IClientsRepository from "../repositories/IClientsRepository";

@injectable()
class CreateClientService {
    constructor(
        @inject('ClientsRepository')
        private clientsRepository: IClientsRepository
    ){}

    public async execute({ name, cpf, phone, cellphone, blood_type, email }: ICreateClientDTO): Promise<Client> {
        const checkClientExists = await this.clientsRepository.findByCpf(cpf);

        if (checkClientExists) {
            throw new AppError('Client already booked with this cpf');
        }

        const client = await this.clientsRepository.create({
            name,
            cpf,
            phone,
            cellphone,
            blood_type,
            email,
        });

        return client;
    }
}

export default CreateClientService;