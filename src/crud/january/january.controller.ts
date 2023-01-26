import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { JanuaryService } from './january.service';
import { CreateJanuaryDto } from './dto/create-january.dto';
import { UpdateJanuaryDto } from './dto/update-january.dto';
import { query } from 'express';

@Controller('january')
export class JanuaryController {
  constructor(private readonly januaryService: JanuaryService) {}


  @Get('birth')
  jb(@Query('name') name:string, @Query('adr') adr:string, @Query('gift') gift:string) {
   return this.januaryService.jancreate(name, adr, gift);
  }

 
}
