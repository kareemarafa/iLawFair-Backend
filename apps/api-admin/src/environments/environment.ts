import { AdminUser } from '../app/modules/admin-users/admin-users.entity'
import {AdminMedia} from "../app/modules/admin-media/admin-media.entity";
import {AdminCategory} from "../app/modules/admin-categories/admin-categories.entity";
import {AdminTemplate} from "../app/modules/admin-templates/admin-template.entity";
import {AdminMeta} from "../app/modules/admin-meta/admin-meta.entity";

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
    entities: [AdminUser, AdminMeta, AdminTemplate, AdminCategory, AdminMedia],
    seeds: []
  }
})
export const authConfig = () => ({
  jwtSecret: 'secret',
  jwtExpiresIn: '30d'
})
