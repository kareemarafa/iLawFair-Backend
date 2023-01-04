import {forwardRef, Inject, Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {TenantUser} from './tenant-users.entity'
import {Repository} from 'typeorm'
import {KamService} from "@ionhour/backend-core";
import {AuthService} from "../tenant-auth/tenant-auth.service";

@Injectable()
export class TenantUsersService extends KamService<TenantUser> {
  constructor(
    @InjectRepository(TenantUser) public repo: Repository<TenantUser>,
    @Inject(forwardRef(() => AuthService)) private readonly authService: AuthService
  ) {
    super(repo)
  }

  async createUser(userData: TenantUser): Promise<TenantUser> {
    return this.repo.save(userData);
  }

  async findOneByEmail(email: string): Promise<TenantUser> {
    return this.repo.findOne({where: {email}})
  }

  async getUserFromToken(token: string): Promise<TenantUser> {
    const email = await this.authService.getEmailFromToken(token);
    return this.findOneByEmail(email);
  }

}
