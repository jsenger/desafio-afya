import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import MedicalRecords from "./MedicalRecords";

@Entity('medicalRecordHistoric')
class MedicalRecordHistoric {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    date: Date;

    @Column()
    description: string;

    @Column()
    medical_record_id: string;

    @ManyToOne(() => MedicalRecords, medicalRecords => medicalRecords.medicalRecordHistoric)
    @JoinColumn({ name: 'medical_record_id' })
    medicalRecords: MedicalRecords;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default MedicalRecordHistoric;