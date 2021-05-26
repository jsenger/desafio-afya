import { inject, injectable } from "tsyringe";

import AppError from "@shared/errors/AppError";

import IUsersRepository from "../repositories/IUsersRepository";
import ICreateUserDTO from "../dtos/ICreateUserDTO";

import User from "../infra/typeorm/entities/User";
import IHashProvider from "../providers/HashProvider/models/IHashProvider";

@injectable()
class CreateUserService {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,

        @inject('HashProvider')
        private hashProvider: IHashProvider
    ){}

    public async execute({ name, login, password }: ICreateUserDTO): Promise<User> {
        const checkUserExists = await this.usersRepository.findByLogin(login);

        if (checkUserExists) {
            throw new AppError('User already booked');
        }

        const passwordHashed = await this.hashProvider.generateHash(password);

        const user = await this.usersRepository.create({
            name,
            login,
            password: passwordHashed
        });

        return user;
    }
}

export default CreateUserService;