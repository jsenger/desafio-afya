import { Router } from 'express';

import librariesRouter from '@modules/libraries/infra/http/routes/libraries.routes';
import booksRouter from '@modules/books/infra/http/routes/books.routes';

const routes = Router();

routes.use('/libraries', librariesRouter);
routes.use('/books', booksRouter);

export default routes;
