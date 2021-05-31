export default interface ICreateMedicalCareDTO {
    appointment_date: Date;
    date: Date;
    amount: number;
    status: 'AGENDADO' | 'REALIZADO' | 'CANCELADO';
    client_id: string;
    specialist_id: string;
}