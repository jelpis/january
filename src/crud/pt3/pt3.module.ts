import { Module } from '@nestjs/common';
import { Pt3Service } from './pt3.service';
import { Pt3Controller } from './pt3.controller';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { first } from 'rxjs';

@Module({
  imports:[TypeOrmModule.forFeature([first])],
  controllers: [Pt3Controller],
  providers: [Pt3Service]
})
export class Pt3Module {}
