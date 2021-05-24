import Library from '@modules/libraries/infra/typeorm/entities/Library';

import ICreateLibraryDTO from '../dtos/ICreateLibraryDTO';

export default interface ICustomersRepository {
  create(data: ICreateLibraryDTO): Promise<Library>;
  findById(id: string): Promise<Library | undefined>;
  findByName(name: string): Promise<Library | undefined>;
}
