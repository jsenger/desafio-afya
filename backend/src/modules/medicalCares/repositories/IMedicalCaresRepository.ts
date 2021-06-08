import ICreateMedicalCareDTO from "../dtos/ICreateMedicalCareDTO";
import MedicalCare from "../infra/typeorm/entities/MedicalCare";

export default interface IMedicalCaresRepository {
    create(data: ICreateMedicalCareDTO): Promise<MedicalCare>;
    findByDate(date: Date, specialist_id: string): Promise<MedicalCare | undefined>;
}