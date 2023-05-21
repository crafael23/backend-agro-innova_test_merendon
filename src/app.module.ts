import { Module } from '@nestjs/common';

//  Agregar los importes enmedio de estos comentarios
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmConfig } from './Configs/type-orm.config';
import { GraphqlService } from './graphql/graphql.service';
import { GraphqlResolver } from './graphql/graphql.resolver';
import { ApolloDriverConfig } from '@nestjs/apollo';
import { GQLconfig } from './Configs/Graphql.config';
import { Reserva_agua } from './mqtt/mqtt-entities/mqtt.agua.entity';
import { Modulo } from './mqtt/mqtt-entities/mqtt.modulo.entity';
import { Riego } from './mqtt/mqtt-entities/mqtt.riego.entity';
import { MqttModule } from './mqtt.module';
//  Agregar los importes enmedio de estos comentarios

@Module({
  imports: [

    TypeOrmModule.forRoot(TypeOrmConfig.config),

    TypeOrmModule.forFeature([Modulo, Reserva_agua, Riego]),
    
    GraphQLModule.forRootAsync<ApolloDriverConfig>(GQLconfig.config),

    MqttModule,
  ],
  controllers: [],
  providers: [GraphqlService, GraphqlResolver],
})
export class AppModule {}
