import { v4 as uuid } from 'uuid';

import ICreateAddressDTO from "@modules/addresses/dtos/ICreateAddressDTO";
import Address from "@modules/addresses/infra/typeorm/entities/Address";
import IAddressesRepository from "../IAddressesRepository";

class FakeAddressesRepository implements IAddressesRepository {
    addresses: Address[] = [];
    
    public async create(data: ICreateAddressDTO): Promise<Address> {
        const address = new Address();

        Object.assign(address, { id: uuid() }, data);

        this.addresses.push(address);

        return address;
    }

    public async save(address: Address): Promise<Address> {
        const findIndex = this.addresses.findIndex(findAddress => findAddress.id === address.id);

        this.addresses[findIndex] = address;

        return this.addresses[findIndex];
    }
    
    public async findById(address_id: string): Promise<Address | undefined> {
        const address = this.addresses.find(address => address.id === address_id);

        return address;
    }

}

export default FakeAddressesRepository;