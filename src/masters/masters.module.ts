import {Module} from "@nestjs/common";
import {Master} from "./master.entity";
import {MikroOrmModule} from "@mikro-orm/nestjs";

@Module({
    imports: [
        MikroOrmModule.forFeature([Master]),

    ],
    controllers: [],
    providers: [

    ],
    exports: [],
})

export class MastersModule{

}