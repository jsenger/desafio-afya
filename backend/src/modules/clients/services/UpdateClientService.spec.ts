import FakeAddressesRepository from "@modules/addresses/repositories/fakes/FakeAddressesRepository";
import FakeMedicalRecordsRepository from "@modules/medicalRecords/repositories/fakes/FakeMedicalRecordsRepository";
import AppError from "@shared/errors/AppError";
import FakeClientsRepository from "../repositories/fakes/FakeClientsRepository";
import CreateClientService from "./CreateClientService";
import UpdateClientService from "./UpdateClientService";

let fakeClientsRepository: FakeClientsRepository;
let fakeAddressesRepository: FakeAddressesRepository;
let fakeMedicalRecordsRepository: FakeMedicalRecordsRepository;
let createClient: CreateClientService;
let updateClient: UpdateClientService;

describe('Update Client', () => {
    beforeEach(() => {
        fakeClientsRepository = new FakeClientsRepository();
        fakeAddressesRepository = new FakeAddressesRepository();
        fakeMedicalRecordsRepository = new FakeMedicalRecordsRepository();

        createClient = new CreateClientService(fakeClientsRepository, fakeAddressesRepository, fakeMedicalRecordsRepository);
        updateClient = new UpdateClientService(fakeClientsRepository, fakeAddressesRepository);
    });

    it('should be able to update a client', async () => {
        const client = await createClient.execute({
            name: "John Doe",
            cpf: "00000000001",
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

        const updatedClient = await updateClient.execute({
            id: client.client.id,
            name: "John Tre",
            cpf: "00000000001",
            phone: "00000000000",
            cellphone: "00000000000",
            blood_type: "O+",
            email: "johndoe@example.com",
            address_id: client.address.id,
            cep: "00000001",
            street: "example street",
            number: 123,
            neighborhood: "example neighborhood",
            city: "example city",
            state: "RS"
        });

        expect(updatedClient.client.name).toBe('John Tre');
        expect(updatedClient.address.cep).toBe('00000001');
    });

    it('should not be able to update a client with wrong client_id', async () => {
        const client = await createClient.execute({
            name: "John Doe",
            cpf: "00000000001",
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

        await expect(updateClient.execute({
            id: 'id non-existing',
            name: "John Tre",
            cpf: "00000000001",
            phone: "00000000000",
            cellphone: "00000000000",
            blood_type: "O+",
            email: "johndoe@example.com",
            address_id: client.address.id,
            cep: "00000001",
            street: "example street",
            number: 123,
            neighborhood: "example neighborhood",
            city: "example city",
            state: "RS"
        })).rejects.toBeInstanceOf(AppError);
    });

    it('should not be able to update a client with wrong address_id', async () => {
        const client = await createClient.execute({
            name: "John Doe",
            cpf: "00000000001",
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

        await expect(updateClient.execute({
            id: client.client.id,
            name: "John Tre",
            cpf: "00000000001",
            phone: "00000000000",
            cellphone: "00000000000",
            blood_type: "O+",
            email: "johndoe@example.com",
            address_id: 'id non existing',
            cep: "00000001",
            street: "example street",
            number: 123,
            neighborhood: "example neighborhood",
            city: "example city",
            state: "RS"
        })).rejects.toBeInstanceOf(AppError);
    });

    it('should be able to update a client', async () => {
        await createClient.execute({
            name: "John Doe",
            cpf: "00000000001",
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
        
        const client = await createClient.execute({
            name: "John Doe",
            cpf: "00000000002",
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

        await expect(updateClient.execute({
            id: client.client.id,
            name: "John Tre",
            cpf: "00000000001",
            phone: "00000000000",
            cellphone: "00000000000",
            blood_type: "O+",
            email: "johndoe@example.com",
            address_id: client.address.id,
            cep: "00000001",
            street: "example street",
            number: 123,
            neighborhood: "example neighborhood",
            city: "example city",
            state: "RS"
        })).rejects.toBeInstanceOf(AppError);
    });
});