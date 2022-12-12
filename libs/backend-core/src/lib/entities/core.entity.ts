import {CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import {ApiProperty} from "@nestjs/swagger";

export class CoreEntity {
  @ApiProperty({type: 'number', nullable: true, required: false})
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({type: 'date', nullable: true, required: false})
  @CreateDateColumn()
  createdDate: Date;

  @ApiProperty({type: 'date', nullable: true, required: false})
  @UpdateDateColumn()
  updatedDate: Date;

  @ApiProperty({type: 'date', nullable: true, required: false})
  @DeleteDateColumn()
  deletedDate: Date;
}
