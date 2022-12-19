import { BadRequestException, forwardRef, HttpStatus, Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { TokenPayloadInterface } from "./interfaces";
import {AdminUsersService} from "../admin-users/admin-users.service";
import {EncryptionService} from "@ionhour/encryption";
import {AdminUser} from "../admin-users/admin-users.entity";
import {RegisterAdminUserDto} from "./dto";
import {MessagePattern} from "@nestjs/microservices";

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => AdminUsersService))
    private adminUsersService: AdminUsersService,
    private jwtService: JwtService,
    private encryptionService: EncryptionService  ) {
  }

  async validateUser(email: string, password: string): Promise<RegisterAdminUserDto> {
    const user: AdminUser = await this.adminUsersService.getOne({where: {email}});
    if (user) {
      const isPasswordCorrect = await this.encryptionService.compare(password, user?.password);
      if (isPasswordCorrect) {
        delete user.password;
        return user;
      }
    }
    return null;
  }

  async login(user: AdminUser): Promise<any> {
    let payload: TokenPayloadInterface;
    try {
      payload = { email: user.email, sub: user.id };
    } catch (e) {
      throw new BadRequestException(e);
    }
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  /**
   *   forget password function
   */
  async forgotPassword(email: string): Promise<AdminUser> {
    const user: AdminUser = await this.adminUsersService.getOne({where: {email}});
    return user;
  }

  async checkAuth(token: string): Promise<TokenPayloadInterface> {
    let verifyObject: TokenPayloadInterface;
    try {
      verifyObject = await this.jwtService.verify(token);
    } catch (e) {
      throw new UnauthorizedException();
    }
    return verifyObject;
  }
}
