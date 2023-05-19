import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Reserva_agua {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  Count: number;

  @Column()
  @Field((type) => Int)
  ph: number;

  @Column()
  @Field((type) => Int)
  nivel: number;

  @CreateDateColumn({ type: 'datetime' })
  @Field()
  fecha: Date;
}
