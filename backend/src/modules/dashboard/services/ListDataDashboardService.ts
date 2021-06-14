import IClientsRepository from "@modules/clients/repositories/IClientsRepository";
import IMedicalCaresRepository from "@modules/medicalCares/repositories/IMedicalCaresRepository";
import ISpecialistsRepository from "@modules/specialists/repositories/ISpecialistsRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListDataDashboardService {
    constructor(
        @inject('ClientsRepository')
        private clientsRepository: IClientsRepository,

        @inject('MedicalCaresRepository')
        private medicalCaresRepository: IMedicalCaresRepository,

        @inject('SpecialistsRepository')
        private specialistsRepository: ISpecialistsRepository
    ) {}

    public async execute(): Promise<any> {
        const quantityClients = await this.clientsRepository.count();

        const medicalCaresConfirmed = await this.medicalCaresRepository.countByStatus('AGENDADO');
        const medicalCaresCompleted = await this.medicalCaresRepository.countByStatus('REALIZADO');
        const medicalCaresCanceled = await this.medicalCaresRepository.countByStatus('CANCELADO');

        const specialists = await this.specialistsRepository.list({ name: '' });

        const professions = specialists?.map(specialist => {
            return specialist.profession.name
        });

        const quantityProfessions = professions?.reduce((total, value) => {
            // @ts-ignore
            total[value] = (total[value] || 0) + 1;
            return total;
       }, {});

       const dashboard = {
        quantityClients,
        medicalCaresConfirmed,
        medicalCaresCompleted,
        medicalCaresCanceled,
        quantityProfessions
       };

        return dashboard;
    }
}

export default ListDataDashboardService;