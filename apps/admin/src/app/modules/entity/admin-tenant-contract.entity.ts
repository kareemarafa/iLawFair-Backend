import {CoreEntity} from "@ionhour/backend-core";
import {Column, Entity, ManyToOne} from "typeorm";
import {IsNotEmpty, IsNumber, IsOptional, ValidateIf} from "class-validator";
import {AdminTenantsContractTypesEnum} from "./admin-tenants-contract-types.enum";
import {SubscriptionTypesEnum} from "./subscription-types.enum";
import {ApiProperty} from "@nestjs/swagger";
import {AdminCustomer} from "../admin-customers/admin-customers.entity";


@Entity('customer-contract')
export class AdminTenantContract extends CoreEntity {

  @IsOptional()
  @Column('enum', {
    enum: AdminTenantsContractTypesEnum,
    nullable: false,
  })
  @ApiProperty({
    type: 'enum',
    nullable: false,
    enum: AdminTenantsContractTypesEnum,
  })
  contractType: AdminTenantsContractTypesEnum;

  @IsNotEmpty()
  @Column('enum', {
    enum: SubscriptionTypesEnum,
    nullable: true,
  })
  @ApiProperty({
    type: 'enum',
    nullable: true,
    enum: SubscriptionTypesEnum,
  })
  @ValidateIf(
    (o) => o.contractType === AdminTenantsContractTypesEnum.SUBSCRIPTION,
  )
  subscriptionType: SubscriptionTypesEnum;

  @IsNotEmpty()
  @IsNumber()
  @ValidateIf((o) => o.contractType === AdminTenantsContractTypesEnum.TRIAL)
  @Column('datetime', { nullable: true })
  trialStart: Date;

  @IsNotEmpty()
  @ValidateIf((o) => o.contractType === AdminTenantsContractTypesEnum.TRIAL)
  @Column('datetime', { nullable: true })
  trialEnd: Date;

  @ManyToOne(() => AdminCustomer, (adminCustomer) => adminCustomer.adminTenantContracts)
  adminCustomer: AdminCustomer
}
