import {TenantUser} from "../app/modules/tenant-users/tenant-users.entity";
import {TenantProject} from "../app/modules/tenant-projects/tenant-projects.entity";
import {TenantPage} from "../app/modules/tenant-pages/tenant-pages.entity";
import {UserMedia} from "../app/modules/tenant-media/user.tenant-media";

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
    entities: [TenantUser, TenantProject, TenantPage, UserMedia],
    seeds: [process.env.ENTITIES],
    factories: [process.env.FACTORIES],
    migrations: [process.env.MIGRATIONS],
  }
})

export const authConfig = () => ({
  jwtSecret: 'secret',
  jwtExpiresIn: '30d'
})
