import {KamController} from "@ionhour/backend-core";
import {Controller} from "@nestjs/common";
import {ApiTags} from "@nestjs/swagger";
import {AdminTemplate} from "./admin-template.entity";
import {AdminTemplateService} from "./admin-template.service";
import {MessagePattern} from "@nestjs/microservices";

@Controller('public/templates')
@ApiTags('Public Templates')
export class PublicTemplatesController extends KamController<AdminTemplate> {
  constructor(public service: AdminTemplateService) {
    super(service)
  }

  @MessagePattern({cmd: 'GET_ALL_TEMPLATES'})
  getMany(data: Record<string, any>) {
    const options = {};
    if (Object.keys(data?.keywords || {}).length) {
      const {keywords} = data;
      const categories = keywords.split(',');
      options['relations'] = ['categories'];
      options['where'] = categories.map((category: string) => ({categories: {name: category}}));
    }
    return this.service.getMany(options);
  }
}
