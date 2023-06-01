import { GraphqlService } from './../graphql/graphql.service';
import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Riego } from './mqtt-entities/mqtt.riego.entity';
import { Repository } from 'typeorm';
import { Modulo } from './mqtt-entities/mqtt.modulo.entity';
import { Reserva_agua } from './mqtt-entities/mqtt.agua.entity';
import { ModuloDto } from './mqtt-dtos/mqtt-modulo.dto';
import { Reserva_aguaDTO } from './mqtt-dtos/mqtt-agua.dto';
import { RiegoDTO } from './mqtt-dtos/mqtt-riego.dto';

import { MODULE_SAVED, pubSub } from 'src/graphql/graphql.resolver';

import { ClientProxy, MqttRecordBuilder } from '@nestjs/microservices';

@Injectable()
export class MqttService {
  constructor(
    @Inject('Cliente_NestJS') private client: ClientProxy,

    @InjectRepository(Riego) private RiegoRepository: Repository<Riego>,
    @InjectRepository(Modulo) private ModuloRepository: Repository<Modulo>,
    @InjectRepository(Reserva_agua)
    private AguaRepository: Repository<Reserva_agua>,

    private GraphqlService: GraphqlService,
  ) {
    
  }

  createModulo(Payload: ModuloDto): Promise<Modulo> {
    const newModulo = this.ModuloRepository.create(Payload);
    const savemodulo = this.ModuloRepository.save(newModulo);
    pubSub.publish(MODULE_SAVED, {
      moduleSaved: this.GraphqlService.findlastModulo(),
    });
    return savemodulo;
  }

  createAgua(payload: Reserva_aguaDTO): Promise<Reserva_agua> {
    const newAgua = this.AguaRepository.create(payload);
    return this.AguaRepository.save(newAgua);
  }

  createRiego(payload: RiegoDTO): Promise<Riego> {
    const newRiego = this.RiegoRepository.create(payload);
    return this.RiegoRepository.save(newRiego);
  }

  sendMqttMessage(topic: string, message: number) {
    const record = new MqttRecordBuilder(`${message}`).setQoS(1).build();
    this.client.send(topic, record).subscribe((res) => {
      console.log(`Cliente que recibio este mensaje respondio con ${res}`);
    });
  }
}
