import { IsNotEmpty, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ResetPasswordTenantUserDto {
  @ApiProperty()
  @IsEmail()
  readonly email: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly password: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly token: string;
  id: number;
}
