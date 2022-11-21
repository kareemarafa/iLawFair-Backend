import {DeepPartial, Repository} from "typeorm";
import {DeleteResult} from "typeorm/query-builder/result/DeleteResult";
import {QueryDeepPartialEntity} from "typeorm/query-builder/QueryPartialEntity";

export class KamService<T> {
  relations: string[] = [];
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

  createOne(dto: DeepPartial<T>): Promise<T> {
    return this.repo.save(dto);
  }

  async updateOne(id, dto: QueryDeepPartialEntity<T>): Promise<T> {
    await this.repo.update(id, dto);
    return this.getOne({id});
  }


  deleteOne(options): Promise<DeleteResult> {
    return this.repo.delete(options)
  }

}
