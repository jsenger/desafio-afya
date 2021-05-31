import MedicalRecords from '../infra/typeorm/entities/MedicalRecords';
import ICreateMedicalRecordsDTO from '../dtos/ICreateMedicalRecordsDTO';

export default interface IMedicalRecordsRepository {
    create(data: ICreateMedicalRecordsDTO): Promise<MedicalRecords>;
}