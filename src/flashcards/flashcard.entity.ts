import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../users/user.entity';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Exclude } from 'class-transformer';

@ObjectType()
@Entity()
export class Flashcard {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  question: string;

  @Field()
  @Column()
  answer: string;

  @Field(() => User)
  @ManyToOne(() => User, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user: User;

  @Exclude()
  @Column({ nullable: false })
  userId: string;
}
