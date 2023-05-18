import { Module } from '@nestjs/common';

//  Agregar los importes enmedio de estos comentarios
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from './Configs/type-orm.config';
//  Agregar los importes enmedio de estos comentarios


@Module({
  imports: [
    TypeOrmModule.forRoot(TypeOrmConfig.config),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
