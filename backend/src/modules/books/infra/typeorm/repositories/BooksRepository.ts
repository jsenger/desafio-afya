import { getRepository, Like, Repository } from 'typeorm';

import IBooksRepository from '@modules/books/repositories/IBooksRepository';
import ICreateBookDTO from '@modules/books/dtos/ICreateBookDTO';

import Book from '../entities/Book';

class BooksRepository implements IBooksRepository {
  private ormRepository: Repository<Book>;

  constructor() {
    this.ormRepository = getRepository(Book);
  }

  public async create(data: ICreateBookDTO): Promise<Book> {
    const book = this.ormRepository.create(data);

    await this.ormRepository.save(book);

    return book;
  }

  public async findById(id: string): Promise<Book | undefined> {
    const findBook = await this.ormRepository.findOne(id);

    return findBook;
  }

  public async findByName(name: string): Promise<Book | undefined> {
    const findBook = await this.ormRepository.findOne({
      relations: ['library'],
      where: {
        name: Like(`%${name}%`)
      }
    });

    return findBook;
  }
}

export default BooksRepository;
