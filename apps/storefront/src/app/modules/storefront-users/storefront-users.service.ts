import {forwardRef, Inject, Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {StorefrontUser} from './storefront-users.entity'
import {Repository} from 'typeorm'
import {KamService} from "@ionhour/backend-core";
import {StorefrontAuthService} from "../storefront-auth/storefront-auth.service";

@Injectable()
export class StorefrontUsersService extends KamService<StorefrontUser> {
  constructor(
    @InjectRepository(StorefrontUser) public repo: Repository<StorefrontUser>,
    @Inject(forwardRef(() => StorefrontAuthService)) private readonly authService: StorefrontAuthService
  ) {
    super(repo)
  }

  async createUser(userData: StorefrontUser): Promise<StorefrontUser> {
    return this.repo.save(userData);
  }

  async findOneByEmail(email: string): Promise<StorefrontUser> {
    return this.repo.findOne({where: {email}})
  }

  async getUserFromToken(token: string): Promise<StorefrontUser> {
    const email = await this.authService.getEmailFromToken(token);
    return this.findOneByEmail(email);
  }

}
