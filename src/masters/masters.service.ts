import { Injectable } from '@nestjs/common';
import { EntityManager } from '@mikro-orm/core';
import { Master } from './master.entity';
import {CreateMasterDto, UpdateMasterDto} from "./master.dto";

@Injectable()
export class MasterService {
    constructor(private readonly em: EntityManager) {}

    async findAll(): Promise<Master[]> {
        return this.em.find(Master, {});
    }

    async findById(id: number): Promise<Master | null> {
        return this.em.findOne(Master, { id });
    }

    async create(data: CreateMasterDto): Promise<Master> {
        const master = this.em.create(Master, data);
        await this.em.persistAndFlush(master);
        return master;
    }

    async update(id: number, data:UpdateMasterDto): Promise<Master | null> {
        const master = await this.em.findOne(Master, { id });
        if (!master) {
            return null;
        }
        this.em.assign(master, data);
        await this.em.persistAndFlush(master);
        return master;
    }

    async delete(id: number): Promise<void> {
        await this.em.nativeDelete(Master, { id });
    }
}
