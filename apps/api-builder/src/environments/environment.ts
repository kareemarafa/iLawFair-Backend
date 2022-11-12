import {User} from "../app/modules/users/users.entity";
import {Project} from "../app/modules/projects/projects.entity";
import {Page} from "../app/modules/pages/pages.entity";
import {UserMedia} from "../app/modules/media/user.media";

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
    entities: [User, Project, Page, UserMedia],
    seeds: [process.env.ENTITIES],
    factories: [process.env.FACTORIES],
    migrations: [process.env.MIGRATIONS],
  }
})

export const authConfig = () => ({
  jwtSecret: 'secret',
  jwtExpiresIn: '30d'
})
