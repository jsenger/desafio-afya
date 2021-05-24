import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

import { Exclude } from 'class-transformer';

import Book from '@modules/books/infra/typeorm/entities/Book';

@Entity('libraries')
class Library {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  street: string;

  @Column()
  neighborhood: string;

  @Column()
  number: number;

  @Column()
  city: string;

  @Column()
  state: string;

  @OneToMany(() => Book, book => book.library)
  @Exclude()
  books: Book[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Library;
