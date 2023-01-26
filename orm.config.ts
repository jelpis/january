import { TypeOrmModuleOptions} from '@nestjs/typeorm';

function ormConfig() : TypeOrmModuleOptions {
    const commonConf = {
        SYNCRONIZE : true,
        ENTITIES: [__dirname + '/**/*.entity{.ts,.js}'],
        MIGRATIONS: [__dirname + '/migration/**/*{.ts,.js}'],
        CLI: {
            migrationDir : 'src/migrations',

        },
        MIGRATIONS_Run: false,

    };

    const ormConfig: TypeOrmModuleOptions = {
        type: 'postgres',
        database: 'postgres',
        host:'kviruslab-db.cbwtnxkmrwhv.ap-northeast-2.rds.amazonaws.com',
        port:5432,
        username: 'postgres',
        password: 'kvirusdb',
        logging: true,
        synchronize:true,
        autoLoadEntities:true,
        entities: commonConf.ENTITIES,
    };

    return ormConfig;
}

export{ ormConfig} ;