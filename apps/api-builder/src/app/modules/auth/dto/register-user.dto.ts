import {IsDefined, IsEmail, IsNotEmpty, IsPhoneNumber, IsString, MaxLength, ValidateIf} from "class-validator";
import {ApiProperty, PartialType} from "@nestjs/swagger";
import {User} from "../../users/users.entity";

export class RegisterUserDto extends PartialType(User) {
  id: number;
  createdDate: Date;
  updatedDate: Date;
  deletedDate: Date;

  @IsNotEmpty()
  @IsString()
  @ValidateIf(() => true)
  @MaxLength(100, {always: true})
  @ApiProperty({required: true, type: 'string', nullable: false, maxLength: 100})
  firstName: string

  @IsNotEmpty()
  @IsString()
  @ValidateIf(() => true)
  @MaxLength(100, {always: true})
  @ApiProperty({required: true, type: 'string', nullable: false, maxLength: 100})
  lastName: string

  @IsNotEmpty()
  @IsString()
  @ValidateIf(() => true)
  @MaxLength(100, {always: true})
  @ApiProperty({required: true, type: 'string', nullable: false, maxLength: 100})
  username: string

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
