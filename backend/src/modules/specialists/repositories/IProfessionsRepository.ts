import Profession from "../infra/typeorm/entities/Profession";

export default interface IProfessionsRepository {
    create(name: string): Promise<Profession>;
    findByName(name: string): Promise<Profession | undefined>;
}