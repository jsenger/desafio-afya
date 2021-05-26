import ICreateUserDTO from "../dtos/ICreateUserDTO";
import User from "../infra/typeorm/entities/User";

export default interface IUsersRepository {
    create(data: ICreateUserDTO): Promise<User>;
    findByLogin(login: string): Promise<User | undefined>;
}