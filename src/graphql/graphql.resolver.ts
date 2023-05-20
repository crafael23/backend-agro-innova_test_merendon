import { GraphqlService } from './graphql.service';
import { Args, Int, Query, Resolver } from '@nestjs/graphql';

//repositorios entities
import { Reserva_agua } from 'src/mqtt/mqtt-entities/mqtt.agua.entity';
import { Modulo } from 'src/mqtt/mqtt-entities/mqtt.modulo.entity';
import { Riego } from 'src/mqtt/mqtt-entities/mqtt.riego.entity';

@Resolver()
export class GraphqlResolver {
  constructor(private GQLservice: GraphqlService) {}

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
  async findTest() {
    return this.GQLservice.findTest();
  }
}
