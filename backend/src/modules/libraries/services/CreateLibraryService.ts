import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Library from '../infra/typeorm/entities/Library';
import ILibrariesRepository from '../repositories/ILibrariesRepository';

interface IRequest {
  name: string;
  phone: string;
  street: string;
  neighborhood: string;
  number: number;
  city: string;
  state: string;
}

@injectable()
class CreateLibraryService {
  constructor(
    @inject('LibrariesRepository')
    private librariesRepository: ILibrariesRepository,
  ) { }

  public async execute({ name, phone, street, neighborhood, number, city, state }: IRequest): Promise<Library> {
    const checkLibraryExists = await this.librariesRepository.findByName(
      name,
    );

    if (checkLibraryExists) {
      throw new AppError('This library already booked');
    }

    const library = await this.librariesRepository.create({
      name,
      phone,
      street,
      neighborhood,
      number,
      city,
      state
    });

    return library;
  }
}

export default CreateLibraryService;
