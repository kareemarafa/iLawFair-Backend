import { SetMetadata } from '@nestjs/common';
import {Status} from "./role.enum";

export const ROLES_KEY = 'status';
export const Role = (...status: Status[]) => SetMetadata(ROLES_KEY, status);
