import {IsEmail, IsNotEmpty, IsString, MaxLength} from "class-validator";
import {ApiProperty, PartialType} from "@nestjs/swagger";
import {User} from "../../users/users.entity";

export class RegisterUserDto extends PartialType(User) {
  id: number;
  createdDate: Date;
  updatedDate: Date;
  deletedDate: Date;

  @IsNotEmpty()
  @IsString()
  @MaxLength(100, {always: true})
  @ApiProperty({required: true, type: 'string', nullable: false, maxLength: 100})
  firstName: string

  @IsNotEmpty()
  @IsString()
  @MaxLength(100, {always: true})
  @ApiProperty({required: true, type: 'string', nullable: false, maxLength: 100})
  lastName: string

  @IsNotEmpty()
  @IsString()
  @MaxLength(100, {always: true})
  @ApiProperty({required: true, type: 'string', nullable: false, maxLength: 100})
  username: string

  @IsNotEmpty()
  @IsEmail()
  @MaxLength(100, {always: true})
  @ApiProperty({required: true, type: 'string', nullable: false, maxLength: 100})
  email: string

  @IsNotEmpty()
  @IsString()
  @MaxLength(100, {always: true})
  @ApiProperty({required: true, type: 'string', nullable: false, maxLength: 100})
  password: string

  @IsNotEmpty()
  @IsString()
  @MaxLength(100, {always: true})
  @ApiProperty({required: true, type: 'string', nullable: false, maxLength: 100})
  phone: string
}
