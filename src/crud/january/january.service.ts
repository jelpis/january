import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { group } from 'console';
import { CreateJanuaryDto } from './dto/create-january.dto';
import { UpdateJanuaryDto } from './dto/update-january.dto';
import { jan } from './entities/january.entity';

@Injectable()
export class JanuaryService {
   
    constructor(
      @InjectRepository(jan)
      private readonly repo : Repository<jan>,
   ) {}
    
  async jancreate(name:string, adr:string, gift:string){
   const group = await this.repo.findOneBy({name})

   if (!group) {
    const group2 = this.repo.create({
      name,
      adr,
      gift,
    })
    await this.repo.save(group2);
   } 
  }
}


