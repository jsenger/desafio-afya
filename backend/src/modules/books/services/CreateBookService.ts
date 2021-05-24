import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Book from '../infra/typeorm/entities/Book';
import IBooksRepository from '../repositories/IBooksRepository';

interface IRequest {
  name: string;
  year: number;
  quantity: number;
  library_id: string;
}

@injectable()
class CreateBookService {
  constructor(
    @inject('BooksRepository')
    private booksRepository: IBooksRepository,
  ) { }

  public async execute({ name, year, quantity, library_id }: IRequest): Promise<Book> {
    const checkBookExists = await this.booksRepository.findByName(
      name,
    );

    if (checkBookExists) {
      throw new AppError('This book already booked');
    }

    const book = await this.booksRepository.create({
      name,
      year,
      quantity,
      library_id
    });

    return book;
  }
}

export default CreateBookService;
