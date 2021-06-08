import FakeAddressesRepository from "@modules/addresses/repositories/fakes/FakeAddressesRepository";
import FakeProfessionsRepository from "@modules/specialists/repositories/fakes/FakeProfessionsRepository";
import FakeSpecialistsRepository from "../repositories/fakes/FakeSpecialistsRepository";
import CreateSpecialistService from "./CreateSpecialistService";
import ListSpecialistsService from "./ListSpecialistsService";

let fakeSpecialistsRepository: FakeSpecialistsRepository;
let fakeAddressesRepository: FakeAddressesRepository;
let fakeProfessionsRepository: FakeProfessionsRepository;
let createSpecialist: CreateSpecialistService;
let listSpecialists: ListSpecialistsService;

describe('List Specialists', () => {
    beforeEach(() => {
        fakeSpecialistsRepository = new FakeSpecialistsRepository();
        fakeAddressesRepository = new FakeAddressesRepository();
        fakeProfessionsRepository = new FakeProfessionsRepository();

        createSpecialist = new CreateSpecialistService(fakeSpecialistsRepository, fakeAddressesRepository, fakeProfessionsRepository);
        listSpecialists = new ListSpecialistsService(fakeSpecialistsRepository);
    });

    it('should be able to list specialists', async () => {
        const specialist1 = await createSpecialist.execute({
            name: "John Doe",
            register: "00000000001",
            phone: "00000000000",
            cellphone: "00000000000",
            email: "johndoe@example.com",
            cep: "00000000",
            street: "example street",
            number: 123,
            neighborhood: "example neighborhood",
            city: "example city",
            state: "RS",
            profession_name: 'Cardiologista'
        });

        const specialist2 = await createSpecialist.execute({
            name: "John Doe",
            register: "00000000002",
            phone: "00000000000",
            cellphone: "00000000000",
            email: "johndoe@example.com",
            cep: "00000000",
            street: "example street",
            number: 123,
            neighborhood: "example neighborhood",
            city: "example city",
            state: "RS",
            profession_name: 'Cardiologista'
        });

        const specialist3 = await createSpecialist.execute({
            name: "John Doe",
            register: "00000000003",
            phone: "00000000000",
            cellphone: "00000000000",
            email: "johndoe@example.com",
            cep: "0000000",
            street: "example street",
            number: 123,
            neighborhood: "example neighborhood",
            city: "example city",
            state: "RS",
            profession_name: 'Cardiologista'
        });

        const specialists = await listSpecialists.execute({
            name: 'John'
        });

        expect(specialists).toEqual([
            specialist1.specialist,
            specialist2.specialist,
            specialist3.specialist
        ]);
    });
});