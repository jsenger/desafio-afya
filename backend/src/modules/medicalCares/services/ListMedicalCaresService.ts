import IMedicalRecordsRepository from "@modules/medicalRecords/repositories/IMedicalRecordsRepository";
import { getMonth, getYear, getDay, getDate } from "date-fns";
import { inject, injectable } from "tsyringe";
import IListMedicalCaresWithFilterDTO from "../dtos/IListMedicalCaresWithFilterDTO";
import MedicalCare from "../infra/typeorm/entities/MedicalCare";
import IMedicalCaresRepository from "../repositories/IMedicalCaresRepository";

@injectable()
class ListMedicalCaresService {
    constructor(
        @inject('MedicalCaresRepository')
        private medicalCaresRepository: IMedicalCaresRepository
    ){}

    public async execute({ appointment_date, date, client_id, specialist_id, status }: IListMedicalCaresWithFilterDTO): Promise<MedicalCare[] | undefined> {
        var dateMedicalCare = date;
        var appointmentDateMedicalCare = appointment_date;
        
        if (date){
            var convertDate = Date.parse(date);
            
            dateMedicalCare = new Date(getYear(convertDate), getMonth(convertDate), getDate(convertDate) + 1);
        }
        
        if (appointment_date){
            var convertDate = Date.parse(appointment_date);
            
            appointmentDateMedicalCare = new Date(getYear(convertDate), getMonth(convertDate), getDate(convertDate) + 1);
        }

        const medicalCares = await this.medicalCaresRepository.list({
            appointment_date: appointmentDateMedicalCare, 
            date: dateMedicalCare, 
            client_id, 
            specialist_id, 
            status
        });

        return medicalCares;
    }
}

export default ListMedicalCaresService;