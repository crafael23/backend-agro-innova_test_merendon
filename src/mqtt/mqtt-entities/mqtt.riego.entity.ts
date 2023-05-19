import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Riego {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  Count: number;

  @Column()
  @Field()
  Modulo1_estado: boolean;

  @Column()
  @Field()
  Modulo2_estado: boolean;

  @Column()
  @Field()
  Modulo3_estado: boolean;

  @Column()
  @Field()
  Modulo4_estado: boolean;

  @CreateDateColumn({ type: 'datetime' })
  @Field()
  fecha: Date;
}
