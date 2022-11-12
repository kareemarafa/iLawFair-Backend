import { BadRequestException, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from './users.entity'
import { Repository } from 'typeorm'
import {KamService} from "@ionhour/backend-core";

@Injectable()
export class UsersService extends KamService<User> {
  constructor(@InjectRepository(User) public repo: Repository<User>) {
    super(repo)
  }
  async createUser(userData: User): Promise<User> {
    const user = await this.repo.save(userData)
    if (!user) {
      throw new BadRequestException()
    }
    return user
  }

  async findOneByPhone(phone: string): Promise<User> {
    return this.repo.findOne({ phone })
  }

  async findOneByEmail(email: string): Promise<User> {
    return this.repo.findOne({ email })
  }

  async findOneOrFailByEmail(email: string): Promise<User> {
    return this.repo.findOneOrFail({ email })
  }
}
