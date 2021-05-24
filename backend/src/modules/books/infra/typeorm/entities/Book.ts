import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { Exclude } from 'class-transformer';
import Library from '@modules/libraries/infra/typeorm/entities/Library';

@Entity('books')
class Book {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  classification: string;

  @Column()
  subclassification: string;

  @Column()
  year: number;

  @Column()
  quantity: number;

  @Column()
  library_id: string;

  @ManyToOne(() => Library, library => library.books)
  @JoinColumn({ name: 'library_id' })
  @Exclude()
  library: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Book;
