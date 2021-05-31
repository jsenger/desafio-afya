import Client from "@modules/clients/infra/typeorm/entities/Client";
import Specialist from "@modules/specialists/infra/typeorm/entities/Specialist";
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

    @OneToMany(() => Specialist, specialist => specialist.address)
    specialists: Specialist[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Address;