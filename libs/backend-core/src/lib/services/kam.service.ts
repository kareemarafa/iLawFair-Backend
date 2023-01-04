import {DeepPartial, Like, Repository} from "typeorm";
import {DeleteResult} from "typeorm/query-builder/result/DeleteResult";
import {QueryDeepPartialEntity} from "typeorm/query-builder/QueryPartialEntity";
import {BadRequestException, HttpStatus} from "@nestjs/common";
import {PaginationObjectInterface} from "../../../../interfaces/src";

export class KamService<T> {
  relations: string[] = [];
  uniques: string[] = [];
  selection: Record<string, any> = {};

  constructor(public repo: Repository<T>) {
  }

  async getMany(options: Record<string, any>): Promise<PaginationObjectInterface<T>> {
    const take = options.take || 10
    const page = options.page || 1;
    const skip = (page - 1) * take;

    options['relations'] = this.relations;
    options['select'] = this.selection;
    options['take'] = take;
    options['skip'] = skip;
    const data = await this.repo.findAndCount(options);
    return this.paginateResponse(data, page, take);
  }

  paginateResponse(data, page, limit): PaginationObjectInterface<T> {
    const [result, total] = data;
    const lastPage = Math.ceil(total / limit);
    const nextPage = page + 1 > lastPage ? null : page + 1;
    const prevPage = page - 1 < 1 ? null : page - 1;
    return {
      data: [...result],
      statusCode: HttpStatus.OK,
      count: total,
      currentPage: page,
      nextPage: nextPage,
      prevPage: prevPage,
      lastPage: lastPage,
    }
  }

  getOne(options = {}): Promise<T> {
    options['relations'] = this.relations;
    options['select'] = this.selection;
    return this.repo.findOne(options)
  }

  getOneOrFail(options = {}): Promise<T> {
    options['relations'] = this.relations;
    options['select'] = this.selection;
    return this.repo.findOneOrFail(options)
  }

  async createOne(dto: DeepPartial<T>): Promise<T> {
    this.uniques.length && await this.checkUniques(dto);
    dto = await this.refactorItemBeforeCreate(dto);
    const createdItem = await this.repo.save(dto);
    await this.afterCreateEvent(createdItem);
    return createdItem;
  }

  async refactorItemBeforeCreate(item): Promise<T> {
    return item;
  }

  async afterCreateEvent(item): Promise<void> {
    console.log(JSON.stringify(item));
  }

  async checkUniques(dto: DeepPartial<T>) {
    const _EXISTS = {};
    await Promise.all(
      this.uniques.map(async unique => {
        if (await this.getOne({where: {[unique]: dto[unique]}})) {
          _EXISTS[unique] = `should be unique`;
        } else {
          return;
        }
      })
    );
    if (Object.keys(_EXISTS).length) {
      throw new BadRequestException({errors: _EXISTS}, "validation_error")
    } else {
      return;
    }
  }

  async updateOne(id, dto: QueryDeepPartialEntity<T>): Promise<T> {
    await this.repo.update(id, dto);
    return this.getOne({where: {id}});
  }

  deleteOne(options): Promise<DeleteResult> {
    return this.repo.delete(options)
  }

}
