import { inject, injectable } from "tsyringe";
import AppError from "@shared/errors/AppError";
import Specialist from "../infra/typeorm/entities/Specialist";
import ISpecialistsRepository from "../repositories/ISpecialistsRepository";
import IAddressesRepository from "@modules/addresses/repositories/IAddressesRepository";
import Address from "@modules/addresses/infra/typeorm/entities/Address";
import IProfessionsRepository from "../repositories/IProfessionsRepository";
import Profession from "../infra/typeorm/entities/Profession";

interface IRequest {
    name: string;
    register: string;
    phone: string;
    cellphone: string;
    email: string;
    cep: string;
    street: string;
    number: number;
    neighborhood: string;
    city: string;
    state: string;
    profession_name;
}

interface IResponse {
    specialist: Specialist,
    address: Address,
    profession: Profession
}

@injectable()
class CreateSpecialistService {
    constructor(
        @inject('SpecialistsRepository')
        private specialistsRepository: ISpecialistsRepository,

        @inject('AddressesRepository')
        private addressesRepository: IAddressesRepository,

        @inject('ProfessionsRepository')
        private professionsRepository: IProfessionsRepository
    ){}

    public async execute({ 
        name, 
        register, 
        phone, 
        cellphone,
        email,
        cep,
        street,
        number,
        neighborhood,
        city,
        state,
        profession_name
    }: IRequest): Promise<IResponse> {
        const checkSpecialistExists = await this.specialistsRepository.findByRegister(register);
        
        if (checkSpecialistExists) {
            throw new AppError('Specialist already booked with this register');
        }

        var profession = await this.professionsRepository.findByName(profession_name);

        if (!profession) {
            profession = await this.professionsRepository.create(profession_name);
        }

        const address = await this.addressesRepository.create({
            cep,
            street,
            number,
            neighborhood,
            city,
            state 
        });

        const specialist = await this.specialistsRepository.create({
            name,
            register,
            phone,
            cellphone,
            email,
            address_id: address.id,
            profession_id: profession.id
        });

        return {specialist, address, profession};
    }
}

export default CreateSpecialistService;