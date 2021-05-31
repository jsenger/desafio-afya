import ICreateSpecialistDTO from "../dtos/ICreateSpecialistDTO";
import Specialist from "../infra/typeorm/entities/Specialist";

export default interface ISpecialistsRepository {
    create(data: ICreateSpecialistDTO): Promise<Specialist>;
    findByRegister(register: string): Promise<Specialist | undefined>;
    findById(id: string): Promise<Specialist | undefined>;
}