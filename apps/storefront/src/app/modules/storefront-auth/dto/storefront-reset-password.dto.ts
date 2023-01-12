import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class StorefrontResetPasswordDto {
  @ApiProperty()
  @IsNotEmpty()
  currentPassword: string;

  @ApiProperty()
  @IsNotEmpty()
  newPassword: string;
}
