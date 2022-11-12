import { AdminUser } from '../app/modules/admin_users/admin-users.entity'
import {AdminMeta} from "../app/modules/meta/meta.entity";
import {AdminCategory} from "../app/modules/categories/categories.entity";
import {AdminTemplate} from "../app/modules/templates/template.entity";
import {AdminMedia} from "../app/modules/admin_media/admin.media";

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
