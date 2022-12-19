import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {TenantUser} from './tenant-users.entity'
import {Repository} from 'typeorm'
import {KamService} from "@ionhour/backend-core";

@Injectable()
export class TenantUsersService extends KamService<TenantUser> {
  constructor(@InjectRepository(TenantUser) public repo: Repository<TenantUser>) {
    super(repo)
  }

  async createUser(userData: TenantUser): Promise<TenantUser> {
    return this.repo.save(userData);
  }

  async findOneByEmail(email: string): Promise<TenantUser> {
    return this.repo.findOne({where: {email}})
  }

}
