import ICreateMedicalCareDTO from "../dtos/ICreateMedicalCareDTO";
import MedicalCare from "../infra/typeorm/entities/MedicalCare";

export default interface IMedicalCaresRepository {
    create(data: ICreateMedicalCareDTO): Promise<MedicalCare>;
}