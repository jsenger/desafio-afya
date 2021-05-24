import { Request, Response } from 'express';

import CreateBookService from '@modules/books/services/CreateBookService';

import { container } from 'tsyringe';
import FindBookByNameService from '@modules/books/services/FindBookByNameService';

export default class BooksController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, year, quantity, library_id } = request.body;
    const createBook = container.resolve(CreateBookService);

    const book = await createBook.execute({
      name,
      year,
      quantity,
      library_id
    });

    return response.json(book);
  }

  public async findByName(request: Request, response: Response): Promise<Response> {
    const {name} = request.params;

    const findBook = container.resolve(FindBookByNameService);

    const book = await findBook.execute({ name: name.toString() });

    return response.json(book);
  }
}