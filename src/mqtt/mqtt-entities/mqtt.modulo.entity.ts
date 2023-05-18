import { Entity, Column, PrimaryColumn, CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Modulo{

    @PrimaryGeneratedColumn()
    Count: number;

    @Column()
    Id: number;

    @Column()
    temperatura: number;

    @Column()
    humedad: number;
    
    @CreateDateColumn({type: 'datetime'})
    fecha: Date;
}