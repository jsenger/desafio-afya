import AppError from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import IMedicalRecordsRepository from "../repositories/IMedicalRecordsRepository";

@injectable()
class ListMedicalRecordsService {
    constructor (
        @inject('MedicalRecordsRepository')
        private medicalRecordsRepository: IMedicalRecordsRepository
    ) {}

    public async execute(client_id: any): Promise<any> {
        if (!client_id) {
            throw new AppError('You must pass a client_id on query params');
        }

        const listMedicalRecords = await this.medicalRecordsRepository.listMedicalRecords(client_id);

        if (!listMedicalRecords) {
            throw new AppError('Medical records not found');
        }

        var dateFromLasterMedicalCare = null;
        
        //@ts-ignore
        if(listMedicalRecords.medicalRecordHistoric[0]) {
            //@ts-ignore
            const listSize = listMedicalRecords.medicalRecordHistoric.length;
            //@ts-ignore
            dateFromLasterMedicalCare = listMedicalRecords.medicalRecordHistoric[listSize - 1].date
        }

        return {dateFromLasterMedicalCare, listMedicalRecords};
    }
}

export default ListMedicalRecordsService;