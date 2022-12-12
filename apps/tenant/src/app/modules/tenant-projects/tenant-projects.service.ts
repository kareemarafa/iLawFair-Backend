import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {TenantProject} from './tenant-projects.entity'
import {Repository} from "typeorm";
import {ContractTypes, KamService} from "@ionhour/backend-core";
import {Contract} from "../shared";

@Injectable()
export class TenantProjectsService extends KamService<TenantProject> {
  constructor(@InjectRepository(TenantProject) repo,
              @InjectRepository(Contract) private contractRepo: Repository<Contract>) {
    super(repo)
    this.relations = ['contract'];
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
