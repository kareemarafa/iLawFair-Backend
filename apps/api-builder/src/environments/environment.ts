import { Component } from '../app/modules/components/components.entity'
import { User } from '../app/modules/users/users.entity'
import { Project } from '../app/modules/projects/projects.entity'
import { Page } from '../app/modules/pages/pages.entity'
import { Subscription } from '../app/modules/subscriptions/subscriptions.entity'

export const environment = {
  production: false
}

export const databaseConfig = () => ({
  port: 7100,
  database: {
    host: 'localhost',
    port: 8886,
    username: 'root',
    password: 'password',
    name: 'webme_builder',
    autoLoadEntities: false,
    synchronize: true,
    entities: [Component, User, Project, Page, Subscription],
    seeds: []
  }
})

export const authConfig = () => ({
  jwtSecret: 'secret',
  jwtExpiresIn: '30d'
})
