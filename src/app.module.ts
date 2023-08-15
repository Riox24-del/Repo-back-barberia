import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteModule } from './cliente/cliente.module';
import { CitasModule } from './citas/citas.module';
import { RolModule } from './rol/rol.module';


@Module({
  imports: [TypeOrmModule.forRoot({
    type:'postgres',
    host:'localhost',
    port:5432,
     username:'postgres',
     password:'Melh180899',
     database:'DataChangos',
    autoLoadEntities:true,
    synchronize:true
  }), ClienteModule, CitasModule, RolModule, ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
