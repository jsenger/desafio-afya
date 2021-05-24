import { Request, Response } from 'express';

import CreateLibraryService from '@modules/libraries/services/CreateLibraryService';

import { container } from 'tsyringe';

export default class LibrariesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, phone, street, neighborhood, number, city, state } = request.body;
    const createLibrary = container.resolve(CreateLibraryService);

    const library = await createLibrary.execute({
      name,
      phone,
      street,
      neighborhood,
      number,
      city,
      state
    });

    return response.json(library);
  }
}
