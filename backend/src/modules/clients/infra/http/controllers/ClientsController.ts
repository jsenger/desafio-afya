import CreateAddressService from '@modules/addresses/services/CreateAddressService';
import CreateClientService from '@modules/clients/services/CreateClientService';
import ListClientsService from '@modules/clients/services/ListClientsService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class ClientsController {
    public async create(request: Request, response: Response): Promise<Response> {
        const { 
            name, 
            cpf, 
            phone, 
            cellphone, 
            blood_type, 
            email,
            address: {
                cep,
                street,
                number,
                neighborhood,
                city,
                state
            }
        } = request.body;
        
        const createClient = container.resolve(CreateClientService);

        const client = await createClient.execute({
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
        });

        return response.json(client);
    }

    public async listAll(request: Request, response: Response): Promise<Response> {
        const listClients = container.resolve(ListClientsService);

        const clients = await listClients.execute();

        return response.json(clients);
    }
}