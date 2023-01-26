import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { FruitService } from './fruit.service';
import { CreateFruitDto } from './dto/create-fruit.dto';
import { UpdateFruitDto } from './dto/update-fruit.dto';
import { query } from 'express';

@Controller('fruit')
export class FruitController {
  constructor(private readonly fruitService: FruitService) {}

  @Get('type')
  best(@Query('name') name:string, @Query('season')season:string, @Query('flavor')flavor:string, @Query('country')country:string ){
    return this.fruitService.fruittype(name, season,flavor,country);
  }

}
