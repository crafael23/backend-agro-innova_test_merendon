import { Entity, Column, PrimaryColumn, CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Reserva_agua{
    @PrimaryGeneratedColumn()
    Count: number;
    
    @Column()
    ph: number;

    @Column()
    nivel: number;

    @CreateDateColumn({type: 'datetime'})
    fecha: Date;


}