import { Entity, Column, PrimaryColumn, CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Riego {

    @PrimaryGeneratedColumn()
    Count: number;
    
    @Column()
    Modulo1_estado: boolean;
    
    @Column()
    Modulo2_estado: boolean;

    @Column()
    Modulo3_estado: boolean;

    @Column()
    Modulo4_estado: boolean;

    @CreateDateColumn({type: 'datetime'})
    fecha: Date;

}