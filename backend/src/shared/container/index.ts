import { container } from 'tsyringe';

import ILibrariesRepository from '@modules/libraries/repositories/ILibrariesRepository';
import LibrariesRepository from '@modules/libraries/infra/typeorm/repositories/LibrariesRepository';

import IBooksRepository from '@modules/books/repositories/IBooksRepository';
import BooksRepository from '@modules/books/infra/typeorm/repositories/BooksRepository';

container.registerSingleton<ILibrariesRepository>(
  'LibrariesRepository',
  LibrariesRepository
);

container.registerSingleton<IBooksRepository>(
  'BooksRepository',
  BooksRepository
);