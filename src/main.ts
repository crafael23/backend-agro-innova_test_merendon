import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';



//  Agregar los importes enmedio de estos comentarios
import { MicroserviceOptions , Transport } from '@nestjs/microservices';
import { MqttModule } from './mqtt/mqtt.module';
//  Agregar los importes enmedio de estos comentarios

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  

  const mqtt = await NestFactory.createMicroservice<MicroserviceOptions>(MqttModule,{
    transport: Transport.MQTT,
    options: {
      subscribeOptions: {qos: 1},
      url: 'mqtt://localhost:1883',
    }
  });
  await mqtt.listen();
}
bootstrap();
