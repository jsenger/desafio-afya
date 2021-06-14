import MedicalRecords from '../infra/typeorm/entities/MedicalRecords';
import ICreateMedicalRecordsDTO from '../dtos/ICreateMedicalRecordsDTO';

export default interface IMedicalRecordsRepository {
    create(data: ICreateMedicalRecordsDTO): Promise<MedicalRecords>;
    findByClientId(client_id: string): Promise<MedicalRecords | undefined>;
    listMedicalRecords(client_id: string): Promise<MedicalRecords | undefined>;
}