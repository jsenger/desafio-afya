import Address from '@modules/addresses/infra/typeorm/entities/Address';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

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

    @Column()
    address_id: string;

    @ManyToOne(() => Address, address => address.id)
    @JoinColumn({ name: 'address_id' })
    address: Address;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Client;