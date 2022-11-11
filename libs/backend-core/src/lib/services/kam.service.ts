import {DeepPartial, Repository, UpdateResult} from "typeorm";
import {DeleteResult} from "typeorm/query-builder/result/DeleteResult";

export class KamService<T> {

  constructor(public repo: Repository<T>) {
  }

  getMany(options): Promise<T[]> {
    return this.repo.find(options)
  }

  getOne(options): Promise<T> {
    return this.repo.findOne(options)
  }

  createOne(dto: DeepPartial<T>): Promise<T> {
    return this.repo.save(dto);
  }

  async updateOne(id, dto: T): Promise<T> {
    await this.repo.update(id, dto);
    return this.getOne({id});
  }


  deleteOne(options):  Promise<DeleteResult> {
    return this.repo.delete(options)
  }

}
