import {ContractPeriods, ContractTypes, CoreEntity} from "@ionhour/backend-core";
import {Column, Entity} from "typeorm";
import {IsNotEmpty, IsOptional, ValidateIf} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";


@Entity('contracts')
export class Contract extends CoreEntity {

  @IsOptional()
  @Column('enum', {
    enum: ContractTypes,
    nullable: false,
  })
  @ApiProperty({
    type: 'enum',
    nullable: false,
    enum: ContractTypes,
    default: ContractTypes.TRIAL
  })
  contractType: ContractTypes;

  @IsNotEmpty()
  @Column('enum', {
    enum: ContractPeriods,
    nullable: true,
  })
  @ApiProperty({
    type: 'enum',
    nullable: true,
    enum: ContractPeriods,
  })
  @ValidateIf(
    (o) => o.contractType === ContractTypes.SUBSCRIPTION,
  )
  contractPeriod: ContractPeriods;

  @IsNotEmpty()
  @Column('datetime', {nullable: true})
  activeFrom: Date;

  @IsNotEmpty()
  @Column('datetime', {nullable: true})
  activeTo: Date;

}
