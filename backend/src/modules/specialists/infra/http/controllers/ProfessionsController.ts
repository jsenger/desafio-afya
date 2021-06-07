import CreateProfessionService from "@modules/specialists/services/CreateProfessionService";
import ListProfessionsService from "@modules/specialists/services/ListProfessionsService";
import { Request, Response } from "express";
import { container } from "tsyringe";

class ProfessionsController {
    public async list(request: Request, response: Response): Promise<Response> {
        const listProfessions = container.resolve(ListProfessionsService);

        const professions = await listProfessions.execute();

        return response.json(professions);
    }

    public async create(request: Request, response: Response): Promise<Response> {
        const { name } = request.body;
        const createProfession = container.resolve(CreateProfessionService);

        const profession = await createProfession.execute(name);

        return response.json(profession);
    }
}

export default ProfessionsController;