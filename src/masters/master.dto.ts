import { IsNotEmpty, IsOptional, IsEmail, IsString, IsNumberString, IsDateString } from 'class-validator';

export class CreateMasterDto {
    @IsNotEmpty()
    @IsString()
    firstName!: string;

    @IsNotEmpty()
    @IsString()
    lastName!: string;

    @IsOptional()
    @IsDateString()
    born?: Date;

    @IsNotEmpty()
    @IsNumberString()
    phone!: number;

    @IsNotEmpty()
    @IsEmail()
    email!: string;

    @IsNotEmpty()
    @IsString()
    description!: string;

    @IsNotEmpty()
    @IsString()
    password!: string;
}

export class UpdateMasterDto {
    @IsOptional()
    @IsString()
    firstName?: string;

    @IsOptional()
    @IsString()
    lastName?: string;

    @IsOptional()
    @IsDateString()
    born?: Date;

    @IsOptional()
    @IsNumberString()
    phone?: number;

    @IsOptional()
    @IsEmail()
    email?: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsString()
    password?: string;
}