import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('clients')
class Client {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    cpf: string;

    @Column()
    name: string;

    @Column()
    phone: string;

    @Column()
    cellphone: string;

    @Column()
    email: string;

    @Column()
    blood_type: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Client;