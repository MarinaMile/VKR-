import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { MasterService } from './masters.service';
import { Master } from './master.entity';
import { CreateMasterDto, UpdateMasterDto } from './master.dto';
import { validate } from 'class-validator';

@Controller('masters')
export class MasterController {
    constructor(private readonly service: MasterService) {}

    @Get()
    async findAll(): Promise<Master[]> {
        return this.service.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id: string): Promise<Master | null> {
        return this.service.findById(+id);
    }

    @Post()
    async create(@Body() data: CreateMasterDto): Promise<Master> {
        const errors = await validate(data);
        if (errors.length > 0) {
            throw new Error(errors.toString());
        }
        return this.service.create(data);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() data: UpdateMasterDto): Promise<Master | null> {
        const errors = await validate(data);
        if (errors.length > 0) {
            throw new Error(errors.toString());
        }
        return this.service.update(+id, data);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        return this.service.delete(+id);
    }
}