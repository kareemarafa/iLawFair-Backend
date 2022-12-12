import {DeepPartial, Repository} from "typeorm";
import {DeleteResult} from "typeorm/query-builder/result/DeleteResult";
import {QueryDeepPartialEntity} from "typeorm/query-builder/QueryPartialEntity";
import {BadRequestException} from "@nestjs/common";

export class KamService<T> {
  relations: string[] = [];
  uniques: string[] = [];
  selection: Record<string, boolean> = {};

  constructor(public repo: Repository<T>) {
  }

  getMany(options = {}): Promise<T[]> {
    options['relations'] = this.relations;
    options['select'] = this.selection;
    return this.repo.find(options)
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
      throw new BadRequestException( {errors: _EXISTS}, "validation_error")
    } else {
      return;
    }
  }

  async updateOne(id, dto: QueryDeepPartialEntity<T>): Promise<T> {
    await this.repo.update(id, dto);
    return this.getOne({id});
  }

  deleteOne(options): Promise<DeleteResult> {
    return this.repo.delete(options)
  }

}
