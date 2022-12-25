import {IsEmail, IsNotEmpty, IsPhoneNumber, IsString } from "class-validator";
import {ApiProperty, PartialType} from "@nestjs/swagger";
import {TenantUser} from "../../tenant-users/tenant-users.entity";

export class RegisterUserDto extends PartialType(TenantUser) {
  id: number;
  createdDate: Date;
  updatedDate: Date;
  deletedDate: Date;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({required: true, type: 'string', nullable: false, maxLength: 100})
  fullName: string

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({required: true, type: 'string', nullable: false, maxLength: 100})
  email: string

  @IsNotEmpty()
  @IsString()
  @ApiProperty({required: true, type: 'string', nullable: false, maxLength: 100})
  password: string

  @IsNotEmpty()
  @IsPhoneNumber()
  @ApiProperty({required: true, type: 'string', nullable: false, maxLength: 100})
  phone: string
}
