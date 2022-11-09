import { AdminUser } from '../app/modules/admin_users/admin-users.entity'
import { Survey } from '../app/modules/admin_survey/admin-survey.entity'
import { AdminCustomer } from '../app/modules/admin_customers/admin-customers.entity'
import { Packages } from '../app/modules/admin_packages/admin-packages.entity'
import {Addons} from "../app/modules/admin_addons/addons.entity";
import {Meta} from "../app/modules/meta/meta.entity";
import {Category} from "../app/modules/categories/categories.entity";
import {Template} from "../app/modules/templates/template.entity";
import {AdminMediaEntity} from "../app/modules/admin_media/admin-media.entity";

export const environment = {
  production: false
}

export const databaseConfig = () => ({
  port: 7101,
  adminMSPort: 7102,
  database: {
    host: 'localhost',
    port: 8886,
    username: 'root',
    password: 'password',
    name: 'webme_admin',
    autoLoadEntities: false,
    synchronize: true,
    entities: [AdminUser, Survey, AdminCustomer, Packages, Addons, AdminUser, Meta, Template, Category, AdminMediaEntity],
    seeds: []
  }
})
export const authConfig = () => ({
  jwtSecret: 'secret',
  jwtExpiresIn: '30d'
})
