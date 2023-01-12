import {TenantUser} from "../app/modules/tenant-users/tenant-users.entity";
import {TenantMedia} from "../app/modules/tenant-media/tenant-media.entity";
import {Contract} from "../app/modules/shared";

export const environment = {
  production: false
}

export const databaseConfig = () => ({
  port: process.env.PORT,
  adminMSPort: 7102,
  database: {
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    name: process.env.DATABASE_NAME,
    autoLoadEntities: false,
    synchronize: true,
    entities: [TenantUser, TenantMedia, Contract],
    seeds: [process.env.ENTITIES],
    factories: [process.env.FACTORIES],
    migrations: [process.env.MIGRATIONS],
  }
})

export const authConfig = () => ({
  jwtSecret: 'secret',
  jwtExpiresIn: '30d'
})
