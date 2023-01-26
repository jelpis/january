import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePt3Dto } from './dto/create-pt3.dto';
import { UpdatePt3Dto } from './dto/update-pt3.dto';
import { first } from './entities/pt3.entity';

@Injectable()
export class Pt3Service {
  
  constructor(
     @InjectRepository(first)
     private readonly repo : Repository<first>,
  ) {}

  async pt3create( name:string , role:string, age:number, debut:Date){
    const group = await this.repo.findOneBy({name})

    if(!group){
     const newg = this.repo.create({
      name,
      role,
      age,
      debut,   

     })
     await this.repo.save(newg);
    }
  }

}
