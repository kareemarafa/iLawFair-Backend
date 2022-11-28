import { IsEmail, IsOptional, IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class UpdateProfileDto {
  @IsOptional() @IsString() @ApiProperty({ required: false }) fullName: string
  @IsOptional() @IsEmail() @ApiProperty({ required: false }) email: string
  @IsOptional() @IsString() @ApiProperty({ required: false }) password: string
  @IsOptional() @IsString() @ApiProperty({ required: false }) phone: string
}
