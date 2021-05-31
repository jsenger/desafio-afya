import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('medicalCares')
class MedicalCare {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    appointment_date: Date;

    @Column()
    date: Date;

    @Column()
    amount: number;

    @Column()
    status: 'AGENDADO' | 'REALIZADO' | 'CANCELADO';

    @Column()
    client_id: string;

    @Column()
    specialist_id: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default MedicalCare;