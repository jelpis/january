import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFruitDto } from './dto/create-fruit.dto';
import { UpdateFruitDto } from './dto/update-fruit.dto';
import { fruit } from './entities/fruit.entity';

@Injectable()
export class FruitService {
 
  constructor(
    @InjectRepository(fruit)
    private readonly repo: Repository<fruit>,
  ){}

async fruittype(name:string,season:string, flavor:string, country:string) {
    const type = await this.repo.findOneBy({name})
    
    if(!type){
      const newtype = this.repo.create({
        name,
        season,
        flavor,
        country,
      })
      await this.repo.save(newtype);

    }

  }

 
}
