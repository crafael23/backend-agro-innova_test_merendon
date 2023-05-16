import { Module } from '@nestjs/common';


//  Agregar los importes enmedio de estos comentarios
import { ClientsModule , Transport } from '@nestjs/microservices';
import { MqttController } from './mqtt.controller';
import { MqttService } from './mqtt.service';
//  Agregar los importes enmedio de estos comentarios

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'Cliente_NestJS',
        transport: Transport.MQTT,
        options: {
          subscribeOptions: {qos: 1},
          url: 'mqtt://localhost:1883',
        }
      },
    ]),
  ],
  controllers: [MqttController],
  providers: [MqttService]
})
export class MqttModule {}
