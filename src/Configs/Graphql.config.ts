import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';


class subscriptions {
  public static config = {
    'graphql-ws': true,
  };
}
class GraphQLConfig {
  public static createConfig(): ApolloDriverConfig {
    return {
      autoSchemaFile: join(process.cwd(), 'src/graphql/schema.gql'),
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      subscriptions: subscriptions.config,
    };
  }
}




export class GQLconfig {
  public static config = {
    driver: ApolloDriver,
    useFactory: GraphQLConfig.createConfig,
  };
  
}