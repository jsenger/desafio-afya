import FakeProfessionsRepository from "../repositories/fakes/FakeProfessionsRepository";
import ListProfessionsService from "./ListProfessionsService";

let fakeProfessionsRepository: FakeProfessionsRepository;
let listProfessions: ListProfessionsService;

describe('List Professions', () => {
    beforeEach(() => {
        fakeProfessionsRepository = new FakeProfessionsRepository();
        listProfessions = new ListProfessionsService(fakeProfessionsRepository);
    });

    it('should be able to list professions', async () => {
        const profession1 = await fakeProfessionsRepository.create('Profession name 1');
        const profession2 = await fakeProfessionsRepository.create('Profession name 2');
        const profession3 = await fakeProfessionsRepository.create('Profession name 3');

        const professions = await listProfessions.execute();

        expect(professions).toEqual([
            profession1,
            profession2,
            profession3
        ]);
    });
});