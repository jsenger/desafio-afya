import { inject, injectable } from "tsyringe";
import AppError from "@shared/errors/AppError";
import Client from "../infra/typeorm/entities/Client";
import IClientsRepository from "../repositories/IClientsRepository";
import IAddressesRepository from "@modules/addresses/repositories/IAddressesRepository";
import IMedicalRecordsRepository from "@modules/medicalRecords/repositories/IMedicalRecordsRepository";
import { Body, Post, Route } from "tsoa";
import Address from "@modules/addresses/infra/typeorm/entities/Address";
import MedicalRecords from "@modules/medicalRecords/infra/typeorm/entities/MedicalRecords";

interface ICreateClientRequest {
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

interface ICreateClientResponse {
    client: Client,
    address: Address,
    medicalRecords: MedicalRecords
}

@Route('/clients')
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

    @Post('/')
    public async execute(
        @Body() { 
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
    }: ICreateClientRequest): Promise<ICreateClientResponse> {
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