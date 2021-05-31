import { inject, injectable } from "tsyringe";
import ICreateAddressDTO from "../dtos/ICreateAddressDTO";
import Address from "../infra/typeorm/entities/Address";
import IAddressesRepository from "../repositories/IAddressesRepository";

@injectable()
class CreateAddressService {
    constructor(
        @inject('AddressesRepository')
        private addressesRepository: IAddressesRepository
    ){}

    public async execute({ cep, street, number, neighborhood, city, state }: ICreateAddressDTO): Promise<Address> {
        const address = await this.addressesRepository.create({
            cep,
            street,
            number,
            neighborhood,
            city,
            state
        });

        return address;
    }
}

export default CreateAddressService;