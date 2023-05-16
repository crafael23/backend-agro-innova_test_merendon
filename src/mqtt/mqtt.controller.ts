import { Controller } from '@nestjs/common';

//  Agregar los importes enmedio de estos comentarios
import{ Ctx, MessagePattern, MqttContext, Payload } from '@nestjs/microservices';
import { MqttService } from './mqtt.service';
//  Agregar los importes enmedio de estos comentarios

@Controller('mqtt')
export class MqttController {
    constructor(
        private readonly mqttService: MqttService,
    ) { }

    @MessagePattern('modulo1')
    executeSave1(@Payload() payload: any , @Ctx() context: MqttContext){
        console.log(`___New message ${context.getTopic()}____`);
        console.log("Payload: ", payload);
      }
}
