import { agent } from 'supertest';
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    PrimaryColumn,
} from 'typeorm';

@Entity('first')
export class first{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column()
    role:string;

    @Column()
    age:Number;

    @Column()
    debut:Date;

}