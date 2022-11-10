import {User} from "../app/modules/users/users.entity";
import {Project} from "../app/modules/projects/projects.entity";
import {Page} from "../app/modules/pages/pages.entity";
import {MediaEntity} from "../app/modules/media/media.entity";
import {MockCategory} from "../app/controllers/mock-category.entity";

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
    entities: [User, Project, Page, MediaEntity, MockCategory],
    seeds: [process.env.ENTITIES],
    factories: [process.env.FACTORIES],
    migrations: [process.env.MIGRATIONS],
  }
})

export const authConfig = () => ({
  jwtSecret: 'secret',
  jwtExpiresIn: '30d'
})
