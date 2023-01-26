import { agent } from 'supertest';
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    PrimaryColumn,
} from 'typeorm';

@Entity('january')
export class jan{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column({default : '2022-12-29 15:29:22.343 +0900'})
    birth:Date;

    @Column()
    adr:string;

    @Column()
    gift:string;   

}

//typeorm nestjs
