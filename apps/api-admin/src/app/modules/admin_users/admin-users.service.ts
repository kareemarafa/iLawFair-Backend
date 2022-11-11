import { InjectRepository } from '@nestjs/typeorm'
import {BadRequestException, Injectable} from '@nestjs/common'
import { AdminUser } from './admin-users.entity'
import {KamService} from "@ionhour/backend-core";

@Injectable()
export class AdminUsersService extends KamService<AdminUser> {
  constructor(@InjectRepository(AdminUser) repo) {
    super(repo)
  }
  async createUser(userData: AdminUser): Promise<AdminUser> {
    const user = await this.repo.save(userData)
    if (!user) {
      throw new BadRequestException()
    }
    return user
  }

  async findOneByPhone(phone: string): Promise<AdminUser> {
    return this.repo.findOne({ phone })
  }

  async findOneByEmail(email: string): Promise<AdminUser> {
    return this.repo.findOne({ email })
  }

  async findOneOrFailByEmail(email: string): Promise<AdminUser> {
    return this.repo.findOneOrFail({ email })
  }
}
