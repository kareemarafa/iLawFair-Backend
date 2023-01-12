import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class StorefrontJwtAuthGuard extends AuthGuard('jwt') {}
