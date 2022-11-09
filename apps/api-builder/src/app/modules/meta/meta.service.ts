import {Inject, Injectable, Scope} from '@nestjs/common'
import {lastValueFrom} from "rxjs";
import {ClientProxy} from "@nestjs/microservices";

@Injectable()
export class MetaService {
  constructor(@Inject("ADMIN_SERVICE") private readonly adminService: ClientProxy) {
  }

  findByKey(key: string) {
    return lastValueFrom(this.adminService.send({ cmd: 'GET_META_BY_KEY' }, { key }))
  }
}
