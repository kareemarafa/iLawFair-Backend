import { InjectRepository } from '@nestjs/typeorm'
import {BadRequestException, Injectable} from '@nestjs/common'
import { AdminUser } from './admin-users.entity'
import {KamService} from "@ionhour/backend-core";
import {RegisterAdminUserDto} from "../auth/dto";

@Injectable()
export class AdminUsersService extends KamService<AdminUser> {
  constructor(@InjectRepository(AdminUser) repo) {
    super(repo)
    this.relations = []
  }
  async createUser(userData: RegisterAdminUserDto): Promise<RegisterAdminUserDto> {
    const user = await this.repo.save(userData)
    if (!user) {
      throw new BadRequestException()
    }
    delete user.password;
    return user;
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

  async findOne(username: string): Promise<AdminUser> {
    return this.repo.findOne({username});
  }
}
