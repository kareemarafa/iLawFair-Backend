import { User } from '../app/modules/users/users.entity'
import { Project } from '../app/modules/projects/projects.entity'
import { Page } from '../app/modules/pages/pages.entity'
import { Subscription } from '../app/modules/subscriptions/subscriptions.entity'
import { Media } from '../app/modules/media/media.entity'

export const environment = {
  production: false
}

export const databaseConfig = () => ({
  port: 7100,
  database: {
    host: 'localhost',
    port: 8886,
    username: 'admin',
    password: '^1Wr04yB!NF8',
    name: 'dev_API_builder',
    autoLoadEntities: false,
    synchronize: true,
    entities: [ User, Project, Page, Subscription, Media],
    seeds: []
  }
})

export const authConfig = () => ({
  jwtSecret: 'secret',
  jwtExpiresIn: '30d'
})
