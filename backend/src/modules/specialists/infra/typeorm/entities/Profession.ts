import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Specialist from "./Specialist";

@Entity('professions')
class Profession {
    @PrimaryGeneratedColumn(`uuid`)
    id: string;

    @Column()
    name: string;

    @OneToMany(() => Specialist, specialist => specialist.address)
    specialists: Specialist[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Profession;