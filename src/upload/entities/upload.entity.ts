import { BaseEntity, Embeddable, Embedded, Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Embeddable()
export class UploadedImage {
    @Property()
    width: number;

    @Property()
    height: number;

    @Property()
    size: number;

    @Property({ hidden: true })
    key: string;

    @Property({ hidden: true })
    bucket: string;

    @Property()
    url: string;

    constructor(opts: UploadedImage) {
        Object.assign(this, opts);
    }
}

@Entity()
export class Upload extends BaseEntity<Upload, 'uuid'> {
    @PrimaryKey({ type: 'uuid', defaultRaw: 'gen_random_uuid()' })
    uuid: string;

    @Property({hidden:true})
    key: string;

    @Property({hidden:true})
    bucket: string;

    @Property()
    url: string;

    @Property()
    type: string;

    @Property()
    name: string;

    @Property()
    size: number;

    @Embedded(() => UploadedImage, { array: true })
    sizes?: UploadedImage[] = [];

    @Property()
    createdAt: Date = new Date();
}