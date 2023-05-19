import { MqttService } from './mqtt.service';
import { Controller } from '@nestjs/common';

//  Agregar los importes enmedio de estos comentarios
import {
  Ctx,
  MessagePattern,
  MqttContext,
  Payload,
} from '@nestjs/microservices';
import { ModuloDto } from './mqtt-dtos/mqtt-modulo.dto';
import { Reserva_aguaDTO } from './mqtt-dtos/mqtt-agua.dto';
import { RiegoDTO } from './mqtt-dtos/mqtt-riego.dto';
//  Agregar los importes enmedio de estos comentarios

@Controller('mqtt')
export class MqttController {
  constructor(private MqttService: MqttService) {}
  @MessagePattern('Estado_Modulo')
  executeModulo(@Payload() payload: ModuloDto, @Ctx() context: MqttContext) {
    console.log(`___New message ${context.getTopic()}____`);
    console.log('Payload: ', payload);
    this.MqttService.createModulo(payload);
    console.log('El mensaje se guardo con exito');
  }
  @MessagePattern('Estado_Agua')
  executeAgua(
    @Payload() payload: Reserva_aguaDTO,
    @Ctx() context: MqttContext,
  ) {
    console.log(`___New message ${context.getTopic()}____`);
    console.log('Payload: ', payload);
    this.MqttService.createAgua(payload);
    console.log('El mensaje se guardo con exito');
  }
  @MessagePattern('Estado_Riego')
  executeRiego(@Payload() payload: RiegoDTO, @Ctx() context: MqttContext) {
    console.log(`___New message ${context.getTopic()}____`);
    console.log('Payload: ', payload);
    this.MqttService.createRiego(payload);
    console.log('El mensaje se guardo con exito');
  }
}
