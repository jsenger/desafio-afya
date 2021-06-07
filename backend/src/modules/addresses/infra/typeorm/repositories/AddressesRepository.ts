import { Repository, getRepository } from 'typeorm';
import ICreateAddressDTO from "@modules/addresses/dtos/ICreateAddressDTO";
import IAddressesRepository from "@modules/addresses/repositories/IAddressesRepository";
import Address from '../entities/Address';

class AddressesRepository implements IAddressesRepository {
    private ormRepository: Repository<Address>;

    constructor() {
        this.ormRepository = getRepository(Address);
    }
    
    async create(data: ICreateAddressDTO): Promise<Address> {
        const address = this.ormRepository.create(data);

        await this.ormRepository.save(address);

        return address;
    }

    async save(data: Address): Promise<Address> {
        return this.ormRepository.save(data);
    }

    async findById(address_id: string): Promise<Address | undefined> {
        const findAddress = await this.ormRepository.findOne(address_id);

        return findAddress;
    }
}

export default AddressesRepository;