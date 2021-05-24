import { getRepository, Repository } from 'typeorm';

import ILibrariesRepository from '@modules/libraries/repositories/ILibrariesRepository';
import ICreateLibraryDTO from '@modules/libraries/dtos/ICreateLibraryDTO';
import Library from '../entities/Library';

class LibrariesRepository implements ILibrariesRepository {
  private ormRepository: Repository<Library>;

  constructor() {
    this.ormRepository = getRepository(Library);
  }

  public async create(data: ICreateLibraryDTO): Promise<Library> {
    const library = this.ormRepository.create(data);

    await this.ormRepository.save(library);

    return library;
  }

  public async findById(id: string): Promise<Library | undefined> {
    const findLibrary = await this.ormRepository.findOne(id);

    return findLibrary;
  }

  public async findByName(name: string): Promise<Library | undefined> {
    const findLibrary = await this.ormRepository.findOne({
      where: {
        name
      }
    });

    return findLibrary;
  }
}

export default LibrariesRepository;
