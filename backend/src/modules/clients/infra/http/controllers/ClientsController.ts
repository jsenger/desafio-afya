import CreateClientService from '@modules/clients/services/CreateClientService';
import ListClientsService from '@modules/clients/services/ListClientsService';
import UpdateClientService from '@modules/clients/services/UpdateClientService';
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

    public async list(request: Request, response: Response): Promise<Response> {
        const { name, cpf, email, blood_type, created_at } = request.query;

        const listClients = container.resolve(ListClientsService);

        const clients = await listClients.execute({
            name,
            cpf,
            email,
            blood_type,
            created_at
        });

        return response.json(clients);
    }

    public async update(request: Request, response: Response): Promise<Response> {
        const { 
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
        } = request.body;

        const updateClient = container.resolve(UpdateClientService);

        const client = await updateClient.execute({
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
        });

        return response.json(client);
    }
}