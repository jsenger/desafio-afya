import CreateSpecialistService from '@modules/specialists/services/CreateSpecialistService';
import ListSpecialistsService from '@modules/specialists/services/ListSpecialistsService'
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class SpecialistsController {
    public async create(request: Request, response: Response): Promise<Response> {
        const { 
            name, 
            register, 
            phone, 
            cellphone,
            email,
            address: {
                cep,
                street,
                number,
                neighborhood,
                city,
                state
            },
            profession_name
        } = request.body;
        
        const createSpecialist = container.resolve(CreateSpecialistService);

        const specialist = await createSpecialist.execute({
            name,
            register,
            phone,
            cellphone,
            email,
            cep,
            street,
            number,
            neighborhood,
            city,
            state,
            profession_name
        });

        return response.json(specialist);
    }

    public async list(request: Request, response: Response): Promise<Response> {
        const { name, register, email, created_at } = request.query;

        const listSpecialists = container.resolve(ListSpecialistsService);

        const specialists = await listSpecialists.execute({
            name,
            register,
            email,
            created_at
        });

        return response.json(specialists);
    }
}