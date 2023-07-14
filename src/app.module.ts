import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteModule } from './cliente/cliente.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type:'postgres',
    host:'localhost',
    port:5432,
     username:'postgres',
     password:'01010011',
     database:'DataChangos',
    autoLoadEntities:true,
    synchronize:true
  }), ClienteModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
