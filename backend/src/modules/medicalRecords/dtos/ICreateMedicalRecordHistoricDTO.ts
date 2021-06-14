export default interface ICreateMedicalRecordHistoricDTO {
    date: Date;
    description: string;
    medical_record_id: string;
    specialist_id: string;
    medical_care_id: string;
}