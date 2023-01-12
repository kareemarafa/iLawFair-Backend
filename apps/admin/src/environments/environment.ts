import { AdminUser } from '../app/modules/admin-users/admin-users.entity'
import {AdminMedia} from "../app/modules/admin-media/admin-media.entity";
import {AdminMeta} from "../app/modules/admin-meta/admin-meta.entity";
import {AdminCustomer} from "../app/modules/admin-customers/admin-customers.entity";

export const environment = {
  production: false
}

export const databaseConfig = () => ({
  port: 7101,
  adminMSPort: 7102,
  database: {
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    name: process.env.ADMIN_DATABASE_NAME,
    autoLoadEntities: false,
    synchronize: true,
    entities: [
      AdminUser,
      AdminMeta,
      AdminMedia,
      AdminCustomer
    ],
    seeds: []
  }
})
export const authConfig = () => ({
  jwtSecret: 'secret',
  jwtExpiresIn: '30d'
})
