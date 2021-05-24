import { Router } from 'express';

import BooksController from '../controller/BooksController';

const booksRouter = Router();
const booksController = new BooksController();

booksRouter.post('/', booksController.create);
booksRouter.get('/:name', booksController.findByName);

export default booksRouter;
