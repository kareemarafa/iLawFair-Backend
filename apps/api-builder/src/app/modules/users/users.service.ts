import { BadRequestException, Injectable } from '@nestjs/common'
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from './users.entity'

@Injectable()
export class UsersService extends TypeOrmCrudService<User> {
  constructor(@InjectRepository(User) repo) {
    super(repo)
  }
  async createUser(userData: User): Promise<User> {
    const user = await this.repo.save(userData)
    if (!user) {
      throw new BadRequestException()
    }
    return user
  }

  async findOneByUsername(username: string): Promise<User> {
    return this.repo.findOne({ username: username })
  }

  async findOneByEmail(email: string): Promise<User> {
    return this.repo.findOne({ email })
  }
}
