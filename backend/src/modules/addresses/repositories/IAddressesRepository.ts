import Address from "../infra/typeorm/entities/Address";
import ICreateAddressDTO from "../dtos/ICreateAddressDTO";

export default interface IAddressesRepository {
    create(data: ICreateAddressDTO): Promise<Address>;
    save(address: Address): Promise<Address>;
    findById(address_id: string): Promise<Address | undefined>;
}