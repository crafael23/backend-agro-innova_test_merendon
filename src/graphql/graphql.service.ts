import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


//repositorios entities
import { Reserva_agua } from 'src/mqtt/mqtt-entities/mqtt.agua.entity';
import { Modulo } from 'src/mqtt/mqtt-entities/mqtt.modulo.entity';
import { Riego } from 'src/mqtt/mqtt-entities/mqtt.riego.entity';
import { MqttService } from 'src/mqtt/mqtt.service';

@Injectable()
export class GraphqlService {
  constructor(
    
    @InjectRepository(Riego) private RiegoRepository: Repository<Riego>,
    @InjectRepository(Modulo) private ModuloRepository: Repository<Modulo>,
    @InjectRepository(Reserva_agua) private AguaRepository: Repository<Reserva_agua>,

  ) {}

  findAllModulo(): Promise<Modulo[]> {
    return this.ModuloRepository.find();
  }

  findAllAgua(): Promise<Reserva_agua[]> {
    return this.AguaRepository.find();
  }

  findAllRiego(): Promise<Riego[]> {
    return this.RiegoRepository.find();
  }

  async findLastXModulo(
    ammount: number,
    id_provided: number,
  ): Promise<Modulo[]> {
    return this.ModuloRepository.find({
      where: { Id: id_provided },
      order: { Count: 'DESC' },
      take: ammount,
    });
  }

  async findlastModulo(): Promise<Modulo[]> {
    const query = this.ModuloRepository.createQueryBuilder('modulo')
      .select('Count, Id, temperatura, humedad')
      .addSelect('Max(fecha)', 'fecha')
      .groupBy('Id');
    return query.getRawMany();
  }
  

  


}
