import { Module } from '@nestjs/common';
import { FruitService } from './fruit.service';
import { FruitController } from './fruit.controller';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { fruit } from './entities/fruit.entity';

@Module({
  imports:[TypeOrmModule.forFeature([fruit])],
  controllers: [FruitController],
  providers: [FruitService]
})
export class FruitModule {}
