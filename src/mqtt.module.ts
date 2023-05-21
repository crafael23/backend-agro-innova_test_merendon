import { Module } from '@nestjs/common';

//  Agregar los importes enmedio de estos comentarios
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MqttController } from './mqtt/mqtt.controller';
import { MqttOptionsConfig } from 'src/Configs/mqtt.options';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Modulo } from './mqtt/mqtt-entities/mqtt.modulo.entity';
import { Reserva_agua } from './mqtt/mqtt-entities/mqtt.agua.entity';
import { Riego } from './mqtt/mqtt-entities/mqtt.riego.entity';
import { TypeOrmConfig } from 'src/Configs/type-orm.config';
import { MqttService } from './mqtt/mqtt.service';
import { GraphqlService } from './graphql/graphql.service';
import { GraphqlResolver } from './graphql/graphql.resolver';
//  Agregar los importes enmedio de estos comentarios

const mqttoptionsconfig = new MqttOptionsConfig();
@Module({
  imports: [

    TypeOrmModule.forRoot(TypeOrmConfig.config),

    TypeOrmModule.forFeature([Modulo, Reserva_agua, Riego]),

    ClientsModule.register([mqttoptionsconfig]),

  ],
  controllers: [MqttController],

  providers: [MqttService,GraphqlService,GraphqlResolver],
  
  exports: [MqttService],
})
export class MqttModule {}
