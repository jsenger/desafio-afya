import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Book from '../infra/typeorm/entities/Book';
import IBooksRepository from '../repositories/IBooksRepository';

interface IRequest {
  name: string;
}

interface IResponse {
  book: Book | string;
}

@injectable()
class FindBookByNameService {
  constructor(
    @inject('BooksRepository')
    private booksRepository: IBooksRepository,
  ) { }

  public async execute({ name }: IRequest): Promise<Book | string> {
    const book = await this.booksRepository.findByName(
      name,  
    );

    if(!book) {
      return `O livro mencionado não foi encontrado`;
    }

    return `O livro ${book.name} está disponível na biblioteca ${book.library.name}, localizada na ${book.library.street}, no ${book.library.neighborhood}, número ${book.library.number}.`;

  }
}

export default FindBookByNameService;
