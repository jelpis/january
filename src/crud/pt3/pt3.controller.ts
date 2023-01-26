import { Controller, Get, Post, Body, Patch, Param, Delete,Query } from '@nestjs/common';
import { Pt3Service } from './pt3.service';
import { CreatePt3Dto } from './dto/create-pt3.dto';
import { UpdatePt3Dto } from './dto/update-pt3.dto';
import { query } from 'express';
import { create } from 'domain';

@Controller('pt3')
export class Pt3Controller {
  constructor(private readonly pt3Service: Pt3Service) {}

 
  @Get('getcon')
  findOne( @Query('name') name:string, @Query('role') role:string, @Query('age') age:number, @Query('debut') debut:Date) {
    return this.pt3Service.pt3create(name, role, age, debut );
  }

 
}
