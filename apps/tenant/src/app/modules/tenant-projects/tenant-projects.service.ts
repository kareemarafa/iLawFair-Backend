import {forwardRef, Inject, Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {TenantProject} from './tenant-projects.entity'
import {Repository} from "typeorm";
import {ContractTypes, KamService} from "@ionhour/backend-core";
import {Contract} from "../shared";
import {TenantUsersService} from "../tenant-users/tenant-users.service";

@Injectable()
export class TenantProjectsService extends KamService<TenantProject> {
  constructor(@InjectRepository(TenantProject) repo,
              @InjectRepository(Contract) private contractRepo: Repository<Contract>,
              @Inject(forwardRef(() => TenantUsersService)) private readonly userService: TenantUsersService
  ) {
    super(repo)
    this.relations = ['contract'];
  }

  async getUserProjects(token: string): Promise<TenantProject[]> {
    const user = await this.userService.getUserFromToken(token);
    return super.getMany({
      relations: ['user'],
      where: {
        user: {id: user.id},
      }
    });
  }

  async refactorItemBeforeCreate(item: TenantProject) {
    const contract: Contract = new Contract();
    contract.contractType = ContractTypes.TRIAL;
    contract.activeFrom = new Date();
    contract.activeTo = new Date((new Date()).getTime() + (14 * 86400000));
    await this.contractRepo.save(contract);
    item.contract = contract;
    return super.refactorItemBeforeCreate(item);
  }

}
