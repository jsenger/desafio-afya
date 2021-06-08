import FakeAddressesRepository from "@modules/addresses/repositories/fakes/FakeAddressesRepository";
import FakeClientsRepository from "@modules/clients/repositories/fakes/FakeClientsRepository";
import CreateClientService from "@modules/clients/services/CreateClientService";
import FakeMedicalRecordsRepository from "@modules/medicalRecords/repositories/fakes/FakeMedicalRecordsRepository";
import FakeProfessionsRepository from "@modules/specialists/repositories/fakes/FakeProfessionsRepository";
import FakeSpecialistsRepository from "@modules/specialists/repositories/fakes/FakeSpecialistsRepository";
import CreateSpecialistService from "@modules/specialists/services/CreateSpecialistService";
import AppError from "@shared/errors/AppError";
import FakeMedicalCaresRepository from "../repositories/fakes/FakeMedicalCaresRepository";
import CreateMedicalCareAppointmentService from "./CreateMedicalCareAppointmentService";

let fakeMedicalCaresRepository: FakeMedicalCaresRepository;
let fakeClientsRepository: FakeClientsRepository;
let fakeAddressesRepository: FakeAddressesRepository;
let fakeMedicalRecordsRepository: FakeMedicalRecordsRepository;
let fakeSpecialistsRepository: FakeSpecialistsRepository;
let fakeProfessionsRepository: FakeProfessionsRepository;
let createMedicalCare: CreateMedicalCareAppointmentService;
let createClient: CreateClientService;
let createSpecialist: CreateSpecialistService;

describe('Create MedicalCare', () => {
    beforeEach(() => {
        fakeMedicalCaresRepository = new FakeMedicalCaresRepository();
        fakeClientsRepository = new FakeClientsRepository();
        fakeSpecialistsRepository = new FakeSpecialistsRepository();
        fakeAddressesRepository = new FakeAddressesRepository();
        fakeProfessionsRepository = new FakeProfessionsRepository();
        fakeMedicalRecordsRepository = new FakeMedicalRecordsRepository();

        createMedicalCare = new CreateMedicalCareAppointmentService(fakeMedicalCaresRepository, fakeClientsRepository, fakeSpecialistsRepository);
        createClient = new CreateClientService(fakeClientsRepository, fakeAddressesRepository, fakeMedicalRecordsRepository);
        createSpecialist = new CreateSpecialistService(fakeSpecialistsRepository, fakeAddressesRepository, fakeProfessionsRepository);
    });

    it('should be able to create a new medical care', async () => {
        jest.spyOn(Date, 'now').mockImplementationOnce(() => {
            return new Date(2021, 5, 8, 14).getTime();
        });

        const client = await createClient.execute({
            name: "John Doe",
            cpf: "00000000000",
            phone: "00000000000",
            cellphone: "00000000000",
            blood_type: "O+",
            email: "johndoe@example.com",
            cep: "00000000",
            street: "example street",
            number: 123,
            neighborhood: "example neighborhood",
            city: "example city",
            state: "RS"
        });

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

        const medicalCare = await createMedicalCare.execute({
            date: new Date(2021, 5, 20, 15),
            amount: 350,
            status: 'AGENDADO',
            client_id: client.client.id,
            specialist_id: specialist.specialist.id
        });

        expect(medicalCare).toHaveProperty('id');
    });

    it('should not be able to create two medical cares appointments on the same time', async () => {
        jest.spyOn(Date, 'now').mockImplementationOnce(() => {
            return new Date(2021, 5, 8, 14).getTime();
        });

        const client = await createClient.execute({
            name: "John Doe",
            cpf: "00000000000",
            phone: "00000000000",
            cellphone: "00000000000",
            blood_type: "O+",
            email: "johndoe@example.com",
            cep: "00000000",
            street: "example street",
            number: 123,
            neighborhood: "example neighborhood",
            city: "example city",
            state: "RS"
        });

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

        await createMedicalCare.execute({
            date: new Date(2021, 5, 20, 15),
            amount: 350,
            status: 'AGENDADO',
            client_id: client.client.id,
            specialist_id: specialist.specialist.id
        });

        await expect(createMedicalCare.execute({
            date: new Date(2021, 5, 20, 15),
            amount: 350,
            status: 'AGENDADO',
            client_id: client.client.id,
            specialist_id: specialist.specialist.id
        })).rejects.toBeInstanceOf(AppError);
    });

    it('should not be able to create a new medical care on a past date', async () => {
        jest.spyOn(Date, 'now').mockImplementationOnce(() => {
            return new Date(2021, 5, 8, 14).getTime();
        });

        const client = await createClient.execute({
            name: "John Doe",
            cpf: "00000000000",
            phone: "00000000000",
            cellphone: "00000000000",
            blood_type: "O+",
            email: "johndoe@example.com",
            cep: "00000000",
            street: "example street",
            number: 123,
            neighborhood: "example neighborhood",
            city: "example city",
            state: "RS"
        });

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

        await expect(createMedicalCare.execute({
            date: new Date(2021, 5, 7, 15),
            amount: 350,
            status: 'AGENDADO',
            client_id: client.client.id,
            specialist_id: specialist.specialist.id
        })).rejects.toBeInstanceOf(AppError);
    });

    it('should not be able to create a new medical care with a non existing client id', async () => {
        jest.spyOn(Date, 'now').mockImplementationOnce(() => {
            return new Date(2021, 5, 8, 14).getTime();
        });

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

        await expect(createMedicalCare.execute({
            date: new Date(2021, 5, 20, 15),
            amount: 350,
            status: 'AGENDADO',
            client_id: 'client id non-existing',
            specialist_id: specialist.specialist.id
        })).rejects.toBeInstanceOf(AppError);
    });

    it('should not be able to create a new medical care with a non existing specialist id', async () => {
        jest.spyOn(Date, 'now').mockImplementationOnce(() => {
            return new Date(2021, 5, 8, 14).getTime();
        });

        const client = await createClient.execute({
            name: "John Doe",
            cpf: "00000000000",
            phone: "00000000000",
            cellphone: "00000000000",
            blood_type: "O+",
            email: "johndoe@example.com",
            cep: "00000000",
            street: "example street",
            number: 123,
            neighborhood: "example neighborhood",
            city: "example city",
            state: "RS"
        });

        await expect(createMedicalCare.execute({
            date: new Date(2021, 5, 20, 15),
            amount: 350,
            status: 'AGENDADO',
            client_id: client.client.id,
            specialist_id: 'specialist id non-existing'
        })).rejects.toBeInstanceOf(AppError);
    });
});