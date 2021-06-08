import { v4 as uuid } from "uuid";

import ICreateMedicalCareDTO from "@modules/medicalCares/dtos/ICreateMedicalCareDTO";
import MedicalCare from "@modules/medicalCares/infra/typeorm/entities/MedicalCare";
import IMedicalCaresRepository from "../IMedicalCaresRepository";
import { isEqual } from "date-fns";

class FakeMedicalCaresRepository implements IMedicalCaresRepository {
    medicalCares: MedicalCare[] = [];

    public async create(data: ICreateMedicalCareDTO): Promise<MedicalCare> {
        const medicalCare = new MedicalCare();

        Object.assign(medicalCare, { id: uuid() }, data);

        this.medicalCares.push(medicalCare);

        return medicalCare;
    } 

    public async findByDate(date: Date, specialist_id: string): Promise<MedicalCare | undefined> {
        const findMedicalCare = this.medicalCares.find((medicalCare) => medicalCare.specialist_id === specialist_id && isEqual(medicalCare.date, date));

        return findMedicalCare;
    }
}

export default FakeMedicalCaresRepository;