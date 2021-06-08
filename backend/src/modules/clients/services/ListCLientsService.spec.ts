import FakeAddressesRepository from "@modules/addresses/repositories/fakes/FakeAddressesRepository";
import FakeMedicalRecordsRepository from "@modules/medicalRecords/repositories/fakes/FakeMedicalRecordsRepository";
import FakeClientsRepository from "../repositories/fakes/FakeClientsRepository";
import CreateClientService from "./CreateClientService";
import ListClientsService from "./ListClientsService";

let fakeClientsRepository: FakeClientsRepository;
let fakeAddressesRepository: FakeAddressesRepository;
let fakeMedicalRecordsRepository: FakeMedicalRecordsRepository;
let createClient: CreateClientService;
let listClients: ListClientsService;

describe('List Clients', () => {
    beforeEach(() => {
        fakeClientsRepository = new FakeClientsRepository();
        fakeAddressesRepository = new FakeAddressesRepository();
        fakeMedicalRecordsRepository = new FakeMedicalRecordsRepository();

        createClient = new CreateClientService(fakeClientsRepository, fakeAddressesRepository, fakeMedicalRecordsRepository);
        listClients = new ListClientsService(fakeClientsRepository);
    });

    it('should be able to list clients', async () => {
        const client1 = await createClient.execute({
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

        const client2 = await createClient.execute({
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

        const client3 = await createClient.execute({
            name: "John Doe",
            cpf: "00000000003",
            phone: "00000000000",
            cellphone: "00000000000",
            blood_type: "O+",
            email: "johndoe@example.com",
            cep: "0000000",
            street: "example street",
            number: 123,
            neighborhood: "example neighborhood",
            city: "example city",
            state: "RS"
        });

        const clients = await listClients.execute({
            name: 'John'
        });

        expect(clients).toEqual([
            client1.client,
            client2.client,
            client3.client
        ]);
    });
});