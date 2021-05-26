import { inject, injectable } from "tsyringe";

import AppError from "@shared/errors/AppError";

import IUsersRepository from "../repositories/IUsersRepository";
import ICreateUserDTO from "../dtos/ICreateUserDTO";

import User from "../infra/typeorm/entities/User";

@injectable()
class CreateUserService {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository
    ){}

    public async execute({ name, login, password }: ICreateUserDTO): Promise<User> {
        const checkUserExists = await this.usersRepository.findByLogin(login);

        if (checkUserExists) {
            throw new AppError('User already booked');
        }

        const user = await this.usersRepository.create({
            name,
            login,
            password
        });

        return user;
    }
}

export default CreateUserService;