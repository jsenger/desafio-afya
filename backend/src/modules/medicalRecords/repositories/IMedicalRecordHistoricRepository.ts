import ICreateMedicalRecordHistoricDTO from "../dtos/ICreateMedicalRecordHistoricDTO";
import MedicalRecordHistoric from "../infra/typeorm/entities/MedicalRecordHistoric";

export default interface IMedicalRecordHistoricRepository {
    create(data: ICreateMedicalRecordHistoricDTO): Promise<MedicalRecordHistoric>;
}