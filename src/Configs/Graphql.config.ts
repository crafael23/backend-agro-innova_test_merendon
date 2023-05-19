import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';

class GraphQLConfig {
  public static createConfig(): ApolloDriverConfig {
    return {
      autoSchemaFile: join(process.cwd(), 'src/graphql/schema.gql'),
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    };
  }
}

export class GQLconfig {
  public static config={
      driver: ApolloDriver,
      useFactory: GraphQLConfig.createConfig,
  }
}