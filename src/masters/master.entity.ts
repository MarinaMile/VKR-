import {Entity, OneToOne, PrimaryKey, Property} from "@mikro-orm/core";

@Entity()
export class Master{
    @PrimaryKey()
    id!: number;

    @Property()
    firstName!: string;

    @Property()
    lastName!: string;

    @Property({ nullable: true })
    born?: Date;

    @Property()
    phone: number;

    @Property()
    email!: string;

    @Property()
   description: string;

    @Property({ hidden: true })
    password!: string;

    @OneToOne()
    upload_id: string;


}




