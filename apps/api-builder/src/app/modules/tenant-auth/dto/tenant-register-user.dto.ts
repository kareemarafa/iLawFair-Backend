import {IsEmail, IsNotEmpty, IsPhoneNumber, IsString, MaxLength, ValidateIf} from "class-validator";
import {ApiProperty, PartialType} from "@nestjs/swagger";
import {TenantUser} from "../../tenant-users/tenant-users.entity";

export class RegisterUserDto extends PartialType(TenantUser) {
  id: number;
  createdDate: Date;
  updatedDate: Date;
  deletedDate: Date;

  @IsNotEmpty()
  @IsString()
  @ValidateIf(() => true)
  @MaxLength(100, {always: true})
  @ApiProperty({required: true, type: 'string', nullable: false, maxLength: 100})
  fullName: string

  @IsNotEmpty()
  @IsEmail()
  @ValidateIf(() => true)
  @MaxLength(100, {always: true})
  @ApiProperty({required: true, type: 'string', nullable: false, maxLength: 100})
  email: string

  @IsNotEmpty()
  @IsString()
  @ValidateIf(() => true)
  @MaxLength(100, {always: true})
  @ApiProperty({required: true, type: 'string', nullable: false, maxLength: 100})
  password: string

  @IsNotEmpty()
  @IsPhoneNumber()
  @ValidateIf(() => true)
  @MaxLength(100, {always: true})
  @ApiProperty({required: true, type: 'string', nullable: false, maxLength: 100})
  phone: string
}
