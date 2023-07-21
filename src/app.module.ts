import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ClienteModule } from './cliente/cliente.module';
import { BarberoModule } from './barbero/barbero.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1Blackiller',
      database: 'DataChangos',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ClienteModule,
    BarberoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
