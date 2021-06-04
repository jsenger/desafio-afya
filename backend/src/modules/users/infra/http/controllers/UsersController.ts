import CreateUserService from '@modules/users/services/CreateUserService';
import { Tags } from '@tsoa/runtime';
import { Post, Route } from '@tsoa/runtime';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class UsersController {
    public async create(request: Request, response: Response): Promise<Response> {
        const { name, login, password } = request.body;

        const createUser = container.resolve(CreateUserService);

        const user = await createUser.execute({
            name,
            login,
            password
        });

        return response.json(user);
    }
}