import { Router } from 'express';

import librariesRouter from '@modules/libraries/infra/http/routes/libraries.routes';
import booksRouter from '@modules/books/infra/http/routes/books.routes';
import usersRouter from '@modules/users/infra/http/routes/users.routes';

const routes = Router();

routes.use('/libraries', librariesRouter);
routes.use('/books', booksRouter);
routes.use('/users', usersRouter);

export default routes;
