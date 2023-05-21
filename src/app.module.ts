import {Module, Scope} from '@nestjs/common';
import {MikroOrmModule} from '@mikro-orm/nestjs';
import mikroOrmConfig from './mikro-orm.config';
import {ConfigModule} from '@nestjs/config';
import {MastersModule} from "./masters/masters.module";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        MastersModule,
        MikroOrmModule.forRootAsync({useFactory: mikroOrmConfig}),
    ],
    controllers: [],
    providers: [],
    exports: [],
})
export class AppModule {
}
