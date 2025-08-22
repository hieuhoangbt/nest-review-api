import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Flashcard {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  question: string;

  @Column()
  answer: string;
}
