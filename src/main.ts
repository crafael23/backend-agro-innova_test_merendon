import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

//  Agregar los importes enmedio de estos comentarios
import { MicroserviceOptions , Transport } from '@nestjs/microservices';
import { MqttModule } from './mqtt.module';
import { MqttConfig } from './Configs/mqtt.config';
//  Agregar los importes enmedio de estos comentarios

async function bootstrap() {
  
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);


  const mqttconfig= new MqttConfig();
  const mqtt = await NestFactory.createMicroservice<MicroserviceOptions>(MqttModule,mqttconfig);
  await mqtt.listen();
}
bootstrap();