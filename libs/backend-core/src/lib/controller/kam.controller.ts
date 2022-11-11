import {Body, Delete, Get, Param, Patch, Post} from "@nestjs/common";
import {KamService} from "../services";
import {DeepPartial, DeleteResult} from "typeorm";

export abstract class KamController<T> {
  protected constructor(public service: KamService<T>) {
  }

  @Get()
  getManyBase(options): Promise<T[]> {
    return this.service.getMany(options);
  }

  @Get(':id')
  getOneBase(@Param('id') id: string): Promise<T> {
    return this.service.getOne({id});
  }

  @Post()
  createOneBase(@Body() dto: DeepPartial<T>): Promise<T> {
    return this.service.createOne(dto);
  }

  @Patch(':id')
  updateOneBase(@Param('id') id: string, @Body() dto: T): Promise<T> {
    return this.service.updateOne(id, dto);
  }

  @Delete(':id')
  deleteOneBase(@Param('id') id: string): Promise<DeleteResult> {
    return this.service.deleteOne({id});
  }
}
