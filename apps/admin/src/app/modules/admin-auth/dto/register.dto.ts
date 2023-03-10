import {IsEmail, IsNotEmpty, IsString, MaxLength, ValidateIf} from "class-validator";
import {ApiProperty, PartialType} from "@nestjs/swagger";
import {AdminUser} from "../../admin-users/admin-users.entity";

export class RegisterAdminUserDto extends PartialType(AdminUser) {
  id: number;
  createdDate: Date;
  updatedDate: Date;
  deletedDate: Date;

  @IsNotEmpty()
  @IsString()
  @ValidateIf(() => true)
  @MaxLength(100, )
  @ApiProperty({required: true, type: 'string', nullable: false, maxLength: 100})
  fullName: string


  @IsNotEmpty()
  @IsEmail()
  @ValidateIf(() => true)
  @MaxLength(100, )
  @ApiProperty({required: true, type: 'string', nullable: false, maxLength: 100})
  email: string

  @IsNotEmpty()
  @IsString()
  @ValidateIf(() => true)
  @MaxLength(100, )
  @ApiProperty({required: true, type: 'string', nullable: false, maxLength: 100})
  password: string
}
