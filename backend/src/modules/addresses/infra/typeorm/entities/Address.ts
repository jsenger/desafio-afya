import Client from "@modules/clients/infra/typeorm/entities/Client";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('addresses')
class Address {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    cep: string;
    
    @Column()
    street: string;
    
    @Column()
    number: number;

    @Column()
    neighborhood: string;

    @Column()
    city: string;

    @Column()
    state: string;

    @OneToMany(() => Client, client => client.address)
    clients: Client[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Address;