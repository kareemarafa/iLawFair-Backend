import {Body, Delete, Get, HttpStatus, Param, Patch, Post} from "@nestjs/common";
import {KamService} from "../services";
import {DeepPartial, DeleteResult} from "typeorm";
import {ApiOperation, ApiResponse} from "@nestjs/swagger";
import {QueryDeepPartialEntity} from "typeorm/query-builder/QueryPartialEntity";
import {PaginationObjectInterface} from "../../../../interfaces/src";

export abstract class KamController<T> {
  protected constructor(public service: KamService<T>) {
  }

  @Get()
  @ApiOperation({
    summary: `Get many`,
  })
  getManyBase(options): Promise<PaginationObjectInterface<T>> {
    return this.service.getMany(options);
  }

  @Get(':id')
  @ApiOperation({
    summary: "Get one",
  })
  getOneBase(@Param('id') id: string): Promise<T> {
    return this.service.getOne({id});
  }

  @Post()
  @ApiOperation({
    summary: "Create",
    description: "Provide required fields to create new ",
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: "created",
  })
  createOneBase(@Body() dto: DeepPartial<T>, ...args): Promise<T> {
    return this.service.createOne(dto);
  }

  @Patch(':id')
  @ApiOperation({
    summary: "Update",
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: "Updated",
  })
  updateOneBase(@Param('id') id: string, @Body() dto: QueryDeepPartialEntity<T>): Promise<T> {
    return this.service.updateOne(id, dto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: "Delete",
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: "Deleted",
  })
  deleteOneBase(@Param('id') id: string): Promise<DeleteResult> {
    return this.service.deleteOne({id});
  }
}
