import {CoreEntity} from "@ionhour/backend-core";
import {Column, Entity, JoinColumn, JoinTable, OneToMany, OneToOne} from "typeorm";
import {IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";
import {AdminTenantContract, SubscriptionStatusEnum} from "../entity";

@Entity('customers')
export class AdminCustomer extends CoreEntity {
  @IsNotEmpty()
  @IsOptional()
  @IsString({always: true})
  @MaxLength(100, {always: true})
  @Column({type: 'varchar', length: 100, nullable: false})
  @ApiProperty({required: true, type: 'string', nullable: false, maxLength: 100})
  fullName: string

  @IsNotEmpty()
  @IsOptional()
  @IsEmail({always: true})
  @MaxLength(100, {always: true})
  @Column({type: 'varchar', length: 100, nullable: false, unique: true})
  @ApiProperty({required: true, type: 'string', nullable: false, maxLength: 100})
  email: string

  @IsNotEmpty()
  @IsOptional()
  @IsString({always: true})
  @MaxLength(100, {always: true})
  @Column({type: 'varchar', length: 100, nullable: false})
  @ApiProperty({required: true, type: 'string', nullable: false, maxLength: 100})
  password: string

  @IsNotEmpty()
  @IsOptional()
  @IsString({always: true})
  @MaxLength(100, {always: true})
  @Column({type: 'varchar', length: 100, nullable: false, unique: true})
  @ApiProperty({required: true, type: 'string', nullable: false, maxLength: 100})
  phone: string

  @Column('enum', {enum: SubscriptionStatusEnum, nullable: false})
  status: string;

  @OneToMany(() => AdminTenantContract, (photo) => adminTenantContract.adminCustomer)
  adminTenantContracts: AdminTenantContract[]
}
