import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {AddonsService} from "./addons.service";
import {AddonsController} from "./addons.controller";
import {Addons} from "./addons.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Addons])],
  controllers: [AddonsController],
  providers: [AddonsService],
  exports: [AddonsService]
})
export class AddonsModule {}
