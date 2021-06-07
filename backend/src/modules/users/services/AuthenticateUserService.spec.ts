import AppError from "@shared/errors/AppError";
import FakeHashProvider from "../providers/HashProvider/fakes/FakeHashProvider";
import FakeUsersRepository from "../repositories/fakes/FakeUsersRespository";
import AuthenticateUserService from "./AuthenticateUserService";

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let authenticateUser: AuthenticateUserService;

describe('Authenticate User', () => {
    beforeEach(() => {
        fakeUsersRepository = new FakeUsersRepository();
        fakeHashProvider = new FakeHashProvider();

        authenticateUser = new AuthenticateUserService(fakeUsersRepository, fakeHashProvider);
    });

    it('should be able to athenticate', async () => {
        const user = await fakeUsersRepository.create({
            name: 'John Doe',
            login: 'johndoe',
            password: '123456'
        });

        const response = await authenticateUser.execute({
            login: 'johndoe',
            password: '123456'
        });

        expect(response).toHaveProperty('token');
        expect(response.user).toEqual(user);
    });

    it('should not be able to authenticate with wrong login', async () => {
        await fakeUsersRepository.create({
            name: 'John Doe',
            login: 'johndoe',
            password: '123456'
        });
    
        await expect(authenticateUser.execute({
            login: 'johntre',
            password: '123456'
        })).rejects.toBeInstanceOf(AppError);
    });

    it('should not be able to authenticate with wrong password', async () => {
        await fakeUsersRepository.create({
            name: 'John Doe',
            login: 'johndoe',
            password: '123456'
        });
    
        await expect(authenticateUser.execute({
            login: 'johndoe',
            password: '654321'
        })).rejects.toBeInstanceOf(AppError);
    });
});