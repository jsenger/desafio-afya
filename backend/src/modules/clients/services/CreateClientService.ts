import { inject, injectable } from "tsyringe";
import AppError from "@shared/errors/AppError";
import Client from "../infra/typeorm/entities/Client";
import IClientsRepository from "../repositories/IClientsRepository";
import IAddressesRepository from "@modules/addresses/repositories/IAddressesRepository";
import Address from "@modules/addresses/infra/typeorm/entities/Address";
import IMedicalRecordsRepository from "@modules/medicalRecords/repositories/IMedicalRecordsRepository";
import MedicalRecords from "@modules/medicalRecords/infra/typeorm/entities/MedicalRecords";

interface IRequest {
    name: string;
    cpf: string;
    phone: string;
    cellphone: string;
    email: string;
    blood_type: string;
    cep: string;
    street: string;
    number: number;
    neighborhood: string;
    city: string;
    state: string;
}

interface IResponse {
    client: Client,
    address: Address,
    medicalRecords: MedicalRecords
}

@injectable()
class CreateClientService {
    constructor(
        @inject('ClientsRepository')
        private clientsRepository: IClientsRepository,

        @inject('AddressesRepository')
        private addressesRepository: IAddressesRepository,

        @inject('MedicalRecordsRepository')
        private medicalRecordsRepository: IMedicalRecordsRepository
    ){}

    public async execute({ 
        name, 
        cpf, 
        phone, 
        cellphone, 
        blood_type, 
        email,
        cep,
        street,
        number,
        neighborhood,
        city,
        state  
    }: IRequest): Promise<IResponse> {
        const checkClientExists = await this.clientsRepository.findByCpf(cpf);

        if (checkClientExists) {
            throw new AppError('Client already booked with this cpf');
        }

        const address = await this.addressesRepository.create({
            cep,
            street,
            number,
            neighborhood,
            city,
            state 
        });

        const client = await this.clientsRepository.create({
            name,
            cpf,
            phone,
            cellphone,
            blood_type,
            email,
            address_id: address.id
        });

        const medicalRecords = await this.medicalRecordsRepository.create({
            opening_date: client.created_at,
            client_id: client.id
        });

        return {client, address, medicalRecords};
    }
}

export default CreateClientService;