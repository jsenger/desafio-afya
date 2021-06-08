import AppError from "@shared/errors/AppError";
import FakeProfessionsRepository from "../repositories/fakes/FakeProfessionsRepository";
import CreateProfessionService from "./CreateProfessionService";

let createProfession: CreateProfessionService;
let fakeProfessionsRepository: FakeProfessionsRepository;

describe('Create a Profession', () => {
    beforeEach(() => {
        fakeProfessionsRepository = new FakeProfessionsRepository();
        createProfession = new CreateProfessionService(fakeProfessionsRepository);
    });

    it('should be able to create a new profession', async () => {
        const profession = await createProfession.execute('Profession name');

        expect(profession).toHaveProperty('id');
    });

    it('should not be able to create a new profession with same name from another', async () => {
        await createProfession.execute('Profession name');

        await expect(createProfession.execute('Profession name')).rejects.toBeInstanceOf(AppError);
    })
}); 