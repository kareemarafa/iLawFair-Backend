import {BadRequestException, HttpStatus, Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {TenantUser} from './tenant-users.entity'
import {Repository, UpdateResult} from 'typeorm'
import {KamService} from "@ionhour/backend-core";
import {AuthService} from "../tenant-auth/tenant-auth.service";

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

  /**
   * Updates a user
   */
  async update(
    id: number,
    userData: any,
  ): Promise<UpdateResult> {
    const existUser: TenantUser = await this.findOneByEmail(userData.email);
    if (
      existUser &&
      id !== existUser.id &&
      userData.email === existUser.email
    ) {
      throw new BadRequestException({
        statusCode: HttpStatus.BAD_REQUEST
      })
    } else {
      return this.repo.update(id, userData);
    }
  }

}
