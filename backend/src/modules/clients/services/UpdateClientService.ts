import Address from "@modules/addresses/infra/typeorm/entities/Address";
import IAddressesRepository from "@modules/addresses/repositories/IAddressesRepository";
import AppError from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import Client from "../infra/typeorm/entities/Client";
import IClientsRepository from "../repositories/IClientsRepository";

interface IRequest {
    id: string;
    name: string;
    cpf: string;
    phone: string;
    cellphone: string;
    email: string;
    blood_type: string;
    address_id: string;
    cep: string;
    street: string;
    number: number;
    neighborhood: string;
    city: string;
    state: string;
}

interface IResponse {
    client: Client,
    address: Address
}

@injectable()
class UpdateClientService {
    constructor(
        @inject('ClientsRepository')
        private clientsRepository: IClientsRepository,
        
        @inject('AddressesRepository')
        private addressesRepository: IAddressesRepository
    ) {}

    public async execute({ 
        id, 
        name, 
        cpf, 
        phone, 
        cellphone, 
        email, 
        blood_type,
        address_id,
        cep,
        street,
        number,
        neighborhood,
        city,
        state
    }: IRequest): Promise<IResponse> {
        const client = await this.clientsRepository.findById(id);

        if(!client) {
            throw new AppError('Client not found');
        }

        const address = await this.addressesRepository.findById(address_id);

        if (!address) {
            throw new AppError('Address not found');
        }

        const clientWithUpdateCpf = await this.clientsRepository.findByCpf(cpf);

        if(clientWithUpdateCpf && clientWithUpdateCpf.id !== id) {
            throw new AppError('CPF already in use');
        }

        client.name = name;
        client.cpf = cpf;
        client.phone = phone;
        client.cellphone = cellphone;
        client.email = email;
        client.blood_type = blood_type;

        address.cep = cep;
        address.street = street;
        address.number = number;
        address.neighborhood = neighborhood;
        address.city = city;
        address.state = state;

        const updatedClient = await this.clientsRepository.save(client);
        const updatedAddress = await this.addressesRepository.save(address);

        return { client: updatedClient, address: updatedAddress };
    }
}

export default UpdateClientService;