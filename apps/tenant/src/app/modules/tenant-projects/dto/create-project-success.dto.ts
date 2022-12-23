import {BuilderType} from "@ionhour/interfaces";
import {ContractPeriods, ContractTypes} from "@ionhour/backend-core";
import {ApiProperty} from "@nestjs/swagger";

class ContractTypeDto {
  @ApiProperty({type: 'enum', nullable: false, required: true, enum: ContractTypes, default: ContractTypes.TRIAL})
  contractType: ContractTypes;
  @ApiProperty({"type": "string", "format": "date-time", nullable: true, required: false}) activeFrom: Date;
  @ApiProperty({"type": "string", "format": "date-time", nullable: true, required: false}) activeTo: Date;
  @ApiProperty({type: 'enum', nullable: true, required: false, enum: ContractPeriods})
  contractPeriod: ContractPeriods;
}

export class CreateProjectSuccessDto {
  @ApiProperty({type: 'string', nullable: false, required: true}) projectName: string;
  @ApiProperty({type: 'string', nullable: true, required: false}) color: string;
  @ApiProperty({type: 'string', nullable: true, required: false}) description: string;
  @ApiProperty({
    type: 'enum',
    nullable: true,
    required: false,
    enum: BuilderType,
    default: BuilderType.SINGLE_PAGE
  }) builderType: BuilderType;
  @ApiProperty({type: 'string', isArray: true, nullable: false, required: true}) keywords: string;
  @ApiProperty({type: ContractTypeDto, nullable: true, required: false})
  contract: ContractTypeDto;
}
