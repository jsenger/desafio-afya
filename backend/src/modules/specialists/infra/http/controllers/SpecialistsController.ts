import CreateSpecialistService from '@modules/specialists/services/CreateSpecialistService';
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
}