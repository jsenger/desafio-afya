import ICreateUserDTO from "@modules/users/dtos/ICreateUserDTO";
import IUsersRepository from "@modules/users/repositories/IUsersRepository";
import { getRepository, Repository } from "typeorm";
import User from "../entities/User";

class UsersRepository implements IUsersRepository {
    private ormRepository: Repository<User>;

    constructor() {
        this.ormRepository = getRepository(User);
    }

    async create(data: ICreateUserDTO): Promise<User> {
        const user = this.ormRepository.create(data);

        await this.ormRepository.save(user);

        return user;
    }

    async findByLogin(login: string): Promise<User | undefined> {
        const user = await this.ormRepository.findOne({
            where: {
                login
            }
        });

        return user;
    }
}

export default UsersRepository;