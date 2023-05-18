import { join } from "path";
import { DataSourceOptions } from "typeorm";

export class TypeOrmConfig {
    static config : DataSourceOptions = {
        type: 'sqlite',
        database: 'database.sqlite',
        entities: [join(__dirname, '../**/**.entity{.ts,.js}')],
        synchronize: true,
    }
}