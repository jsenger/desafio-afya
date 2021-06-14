import FakeAddressesRepository from "@modules/addresses/repositories/fakes/FakeAddressesRepository";
import FakeClientsRepository from "@modules/clients/repositories/fakes/FakeClientsRepository";
import CreateClientService from "@modules/clients/services/CreateClientService";
import FakeMedicalRecordHistoricRepository from "@modules/medicalRecords/repositories/fakes/FakeMedicalRecordHistoricRepository";
import FakeMedicalRecordsRepository from "@modules/medicalRecords/repositories/fakes/FakeMedicalRecordsRepository";
import FakeProfessionsRepository from "@modules/specialists/repositories/fakes/FakeProfessionsRepository";
import FakeSpecialistsRepository from "@modules/specialists/repositories/fakes/FakeSpecialistsRepository";
import CreateSpecialistService from "@modules/specialists/services/CreateSpecialistService";
import AppError from "@shared/errors/AppError";
import FakeMedicalCaresRepository from "../repositories/fakes/FakeMedicalCaresRepository";
import CreateMedicalCareAppointmentService from "./CreateMedicalCareAppointmentService";
import UpdateStatusMedicalCareService from "./UpdateStatusMedicalCareService";

let fakeMedicalCaresRepository: FakeMedicalCaresRepository;
let fakeClientsRepository: FakeClientsRepository;
let fakeAddressesRepository: FakeAddressesRepository;
let fakeMedicalRecordsRepository: FakeMedicalRecordsRepository;
let fakeMedicalRecordHistoricRepository: FakeMedicalRecordHistoricRepository;
let fakeSpecialistsRepository: FakeSpecialistsRepository;
let fakeProfessionsRepository: FakeProfessionsRepository;
let createMedicalCare: CreateMedicalCareAppointmentService;
let createClient: CreateClientService;
let createSpecialist: CreateSpecialistService;
let updateStatusMedicalCare: UpdateStatusMedicalCareService;

describe('Update MedicalCare Status', () => {
    beforeEach(() => {
        fakeMedicalCaresRepository = new FakeMedicalCaresRepository();
        fakeClientsRepository = new FakeClientsRepository();
        fakeSpecialistsRepository = new FakeSpecialistsRepository();
        fakeAddressesRepository = new FakeAddressesRepository();
        fakeProfessionsRepository = new FakeProfessionsRepository();
        fakeMedicalRecordsRepository = new FakeMedicalRecordsRepository();
        fakeMedicalRecordHistoricRepository = new FakeMedicalRecordHistoricRepository();

        createMedicalCare = new CreateMedicalCareAppointmentService(fakeMedicalCaresRepository, fakeClientsRepository, fakeSpecialistsRepository);
        createClient = new CreateClientService(fakeClientsRepository, fakeAddressesRepository, fakeMedicalRecordsRepository);
        createSpecialist = new CreateSpecialistService(fakeSpecialistsRepository, fakeAddressesRepository, fakeProfessionsRepository);
        updateStatusMedicalCare = new UpdateStatusMedicalCareService(fakeMedicalCaresRepository, fakeMedicalRecordHistoricRepository, fakeMedicalRecordsRepository);
    });

    it('should be able to update a medical care status', async () => {
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

        const updatedMedicalCare = await updateStatusMedicalCare.execute({
            medical_care_id: medicalCare.id,
            status: 'REALIZADO'
        });

        expect(updatedMedicalCare.status).toBe('REALIZADO');
    });

    it('should not be able to update a medical care status with a invalid status', async () => {
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

        await expect(updateStatusMedicalCare.execute({
            medical_care_id: medicalCare.id,
            // @ts-ignore
            status: 'INVALIDSTATUS'
        })).rejects.toBeInstanceOf(AppError);
    });

    it('should not be able to update a medical care status with a invalid medical_care_id', async () => {
        await expect(updateStatusMedicalCare.execute({
            medical_care_id: 'non existing id',
            status: 'REALIZADO'
        })).rejects.toBeInstanceOf(AppError);
    });

    it('should not be able to update a medical care status when already canceled', async () => {
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

        await updateStatusMedicalCare.execute({
            medical_care_id: medicalCare.id,
            status: 'CANCELADO'        
        });

        await expect(updateStatusMedicalCare.execute({
            medical_care_id: medicalCare.id,
            status: 'AGENDADO'
        })).rejects.toBeInstanceOf(AppError);
    });

    it('should not be able to update a medical care status when already realized', async () => {
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

        await updateStatusMedicalCare.execute({
            medical_care_id: medicalCare.id,
            status: 'REALIZADO'
        });

        await expect(updateStatusMedicalCare.execute({
            medical_care_id: medicalCare.id,
            status: 'AGENDADO'
        })).rejects.toBeInstanceOf(AppError);
    });
});