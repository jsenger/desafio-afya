import FakeAddressesRepository from "@modules/addresses/repositories/fakes/FakeAddressesRepository";
import FakeMedicalRecordsRepository from "@modules/medicalRecords/repositories/fakes/FakeMedicalRecordsRepository";
import AppError from "@shared/errors/AppError";
import FakeClientsRepository from "../repositories/fakes/FakeClientsRepository";
import CreateClientService from "./CreateClientService";

let fakeClientsRepository: FakeClientsRepository;
let fakeAddressesRepository: FakeAddressesRepository;
let fakeMedicalRecordsRepository: FakeMedicalRecordsRepository;
let createClient: CreateClientService;

describe('Create Client', () => {
    beforeEach(() => {
        fakeClientsRepository = new FakeClientsRepository();
        fakeAddressesRepository = new FakeAddressesRepository();
        fakeMedicalRecordsRepository = new FakeMedicalRecordsRepository();

        createClient = new CreateClientService(fakeClientsRepository, fakeAddressesRepository, fakeMedicalRecordsRepository);
    });

    it('should be able to create a new client', async () => {
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

        expect(client.client).toHaveProperty('id');
        expect(client.address).toHaveProperty('id');
        expect(client.medicalRecords).toHaveProperty('id');
    });

    it('should not be able to create a new client with same cpf from another', async () => {
        await createClient.execute({
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

        await expect(createClient.execute({
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
        })).rejects.toBeInstanceOf(AppError);
    });
});