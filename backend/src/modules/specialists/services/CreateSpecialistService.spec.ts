import FakeAddressesRepository from "@modules/addresses/repositories/fakes/FakeAddressesRepository";
import AppError from "@shared/errors/AppError";
import FakeProfessionsRepository from "../repositories/fakes/FakeProfessionsRepository";
import FakeSpecialistsRepository from "../repositories/fakes/FakeSpecialistsRepository";
import CreateSpecialistService from "./CreateSpecialistService";

let fakeSpecialistsRepository: FakeSpecialistsRepository;
let fakeAddressesRepository: FakeAddressesRepository;
let fakeProfessionsRepository: FakeProfessionsRepository;
let createSpecialist: CreateSpecialistService;

describe('Create Specialist', () => {
    beforeEach(() => {
        fakeSpecialistsRepository = new FakeSpecialistsRepository();
        fakeAddressesRepository = new FakeAddressesRepository();
        fakeProfessionsRepository = new FakeProfessionsRepository();

        createSpecialist = new CreateSpecialistService(fakeSpecialistsRepository, fakeAddressesRepository, fakeProfessionsRepository);
    });

    it('should be able to create a new specialist', async () => {
        const specialist = await createSpecialist.execute({
            name: "John Doe",
            register: "00000000000",
            phone: "00000000000",
            cellphone: "00000000000",
            email: "johndoe@example.com",
            cep: "00000000",
            street: "example street",
            number: 123,
            neighborhood: "example neighborhood",
            city: "example city",
            state: "RS",
            profession_name: "Cardiologista"
        });

        expect(specialist.specialist).toHaveProperty('id');
        expect(specialist.profession).toHaveProperty('id');
        expect(specialist.address).toHaveProperty('id');
    });

    it('should not be able to create a new specialist with same register from another', async () => {
        await createSpecialist.execute({
            name: "John Doe",
            register: "00000000000",
            phone: "00000000000",
            cellphone: "00000000000",
            email: "johndoe@example.com",
            cep: "00000000",
            street: "example street",
            number: 123,
            neighborhood: "example neighborhood",
            city: "example city",
            state: "RS",
            profession_name: "Cardiologista"
        });

        await expect(createSpecialist.execute({
            name: "John Doe",
            register: "00000000000",
            phone: "00000000000",
            cellphone: "00000000000",
            email: "johndoe@example.com",
            cep: "00000000",
            street: "example street",
            number: 123,
            neighborhood: "example neighborhood",
            city: "example city",
            state: "RS",
            profession_name: "Cardiologista"
        })).rejects.toBeInstanceOf(AppError);
    });
});