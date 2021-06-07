import AppError from "@shared/errors/AppError";
import FakeHashProvider from "../providers/HashProvider/fakes/FakeHashProvider";
import FakeUsersRepository from "../repositories/fakes/FakeUsersRespository";
import CreateUserService from "./CreateUserService"

let createUser: CreateUserService;
let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;

describe("Create a user", () => {
    beforeEach(() => {
        fakeUsersRepository = new FakeUsersRepository();
        fakeHashProvider = new FakeHashProvider();
        createUser = new CreateUserService(fakeUsersRepository, fakeHashProvider);
    });
    
    it("should be able to create a new user", async () => {
        const user = await createUser.execute({
            name: 'John Doe',
            login: 'johndoe',
            password: '123456'
        });

        expect(user).toHaveProperty('id');
    });

    it('should not be able to create a new user with same login from another', async () => {
        await createUser.execute({
            name: 'John Doe',
            login: 'johndoe',
            password: '123456'
        });

        await expect(createUser.execute({
            name: 'John Tre',
            login: 'johndoe',
            password: '123456'
        })).rejects.toBeInstanceOf(AppError);
    });
});