import { Module } from '@nestjs/common';
import { JanuaryService } from './january.service';
import { JanuaryController } from './january.controller';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { jan } from './entities/january.entity';

@Module({
  imports:[TypeOrmModule.forFeature([jan])],
  controllers: [JanuaryController],
  providers: [JanuaryService]
})
export class JanuaryModule {}
