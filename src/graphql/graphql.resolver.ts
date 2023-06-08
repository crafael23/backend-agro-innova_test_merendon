import { PubSub } from 'graphql-subscriptions';
import { GraphqlService } from './graphql.service';
import {
  Args,
  Int,
  Mutation,
  Query,
  Resolver,
  Subscription,
} from '@nestjs/graphql';

//repositorios entities
import { Reserva_agua } from 'src/mqtt/mqtt-entities/mqtt.agua.entity';
import { Modulo } from 'src/mqtt/mqtt-entities/mqtt.modulo.entity';
import { Riego } from 'src/mqtt/mqtt-entities/mqtt.riego.entity';
import { MqttService } from 'src/mqtt/mqtt.service';

export const pubSub = new PubSub();
export const MODULE_SAVED = 'moduleSaved';

@Resolver()
export class GraphqlResolver {
  constructor(
    private GQLservice: GraphqlService,
    private MqttService: MqttService,
  ) {}

  @Query((returns) => [Modulo])
  ModuloQuery() {
    return this.GQLservice.findAllModulo();
  }

  @Query((returns) => [Reserva_agua])
  AguaQuery() {
    return this.GQLservice.findAllAgua();
  }

  @Query((returns) => [Riego])
  RiegoQuery() {
    return this.GQLservice.findAllRiego();
  }

  @Query((returns) => [Modulo])
  async LastModuloQuery(
    @Args('ammount', { type: () => Int }) ammount: number,
    @Args('Id', { type: () => Int }) Id: number,
  ) {
    return this.GQLservice.findLastXModulo(ammount, Id);
  }

  @Query((returns) => [Modulo])
  async findLastModulos() {
    return this.GQLservice.findlastModulo();
  }

  @Subscription(() => [Modulo], { name: MODULE_SAVED })
  async subModuloAgregado() {
    return pubSub.asyncIterator(MODULE_SAVED);
  }

  @Query((returns) => [Modulo])
  async Ejemplo() {
    return this.MqttService.sendMqttMessage('hola', 3);
  }
}
