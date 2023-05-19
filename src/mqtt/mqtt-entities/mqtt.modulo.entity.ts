import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Modulo {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  Count: number;

  @Column()
  @Field((type) => Int)
  Id: number;

  @Column()
  @Field((type) => Float)
  temperatura: number;

  @Column()
  @Field((type) => Float)
  humedad: number;

  @CreateDateColumn({ type: 'datetime' })
  @Field()
  fecha: Date;
}
