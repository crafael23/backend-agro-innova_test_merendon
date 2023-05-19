import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Riego } from './mqtt-entities/mqtt.riego.entity';
import { Repository } from 'typeorm';
import { Modulo } from './mqtt-entities/mqtt.modulo.entity';
import { Reserva_agua } from './mqtt-entities/mqtt.agua.entity';
import { ModuloDto } from './mqtt-dtos/mqtt-modulo.dto';
import { Reserva_aguaDTO } from './mqtt-dtos/mqtt-agua.dto';
import { RiegoDTO } from './mqtt-dtos/mqtt-riego.dto';

@Injectable()
export class MqttService {
  constructor(
    @InjectRepository(Riego) private RiegoRepository: Repository<Riego>,
    @InjectRepository(Modulo) private ModuloRepository: Repository<Modulo>,
    @InjectRepository(Reserva_agua)
    private AguaRepository: Repository<Reserva_agua>,
  ) {}

  createModulo(Payload: ModuloDto): Promise<Modulo> {
    const newModulo = this.ModuloRepository.create(Payload);
    return this.ModuloRepository.save(newModulo);
  }

  createAgua(payload: Reserva_aguaDTO): Promise<Reserva_agua> {
    const newAgua = this.AguaRepository.create(payload);
    return this.AguaRepository.save(newAgua);
  }

  createRiego(payload: RiegoDTO): Promise<Riego> {
    const newRiego = this.RiegoRepository.create(payload);
    return this.RiegoRepository.save(newRiego);
  }
}
