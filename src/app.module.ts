import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from 'orm.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { first } from './crud/pt3/entities/pt3.entity';
import { Pt3Module } from './crud/pt3/pt3.module';
import { JanuaryModule } from './crud/january/january.module';
import { FruitModule } from './crud/fruit/fruit.module';

@Module({
  imports: [TypeOrmModule.forRootAsync({ useFactory: ormConfig }), TypeOrmModule.forFeature([first]), Pt3Module, JanuaryModule, FruitModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
