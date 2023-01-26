import { agent } from 'supertest';
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    PrimaryColumn,
} from 'typeorm';

@Entity('fruits')
export class fruit{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name : string;

    @Column()
    season:string;

    @Column()
    flavor:string;

    @Column()
    country:string;

}
