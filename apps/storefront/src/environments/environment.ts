import {StorefrontUser} from "../app/modules/storefront-users/storefront-users.entity";
import {StorefrontTenantMedia} from "../app/modules/storefront-media/storefront-media.entity";

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
    entities: [StorefrontUser, StorefrontTenantMedia],
    seeds: [process.env.ENTITIES],
    factories: [process.env.FACTORIES],
    migrations: [process.env.MIGRATIONS],
  }
})

export const authConfig = () => ({
  jwtSecret: 'secret',
  jwtExpiresIn: '30d'
})
