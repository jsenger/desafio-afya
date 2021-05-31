import Client from "@modules/clients/infra/typeorm/entities/Client";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import MedicalRecordHistoric from "./MedicalRecordHistoric";

@Entity('medicalRecords')
class MedicalRecords {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    opening_date: Date;

    @Column()
    client_id: string;

    @OneToMany(() => MedicalRecordHistoric, medicalRecordHistoric => medicalRecordHistoric.medicalRecords)
    medicalRecordHistoric: MedicalRecordHistoric;

    @OneToOne(() => Client)
    @JoinColumn({ name: 'client_id' })
    client: Client;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default MedicalRecords;