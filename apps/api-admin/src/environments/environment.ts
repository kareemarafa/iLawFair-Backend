import { AdminUser } from '../app/modules/admin_users/admin-users.entity'
import { Survey } from '../app/modules/admin_survey/admin-survey.entity'
import { AdminCustomer } from '../app/modules/admin_customers/admin-customers.entity'
import { Packages } from '../app/modules/admin_packages/admin-packages.entity'

export const environment = {
  production: false
}

export const databaseConfig = () => ({
  port: 7101,
  database: {
    host: 'localhost',
    port: 8886,
    username: 'root',
    password: 'password',
    name: 'webme_admin',
    autoLoadEntities: false,
    synchronize: true,
    entities: [AdminUser, Survey, AdminCustomer, Packages],
    seeds: []
  }
})
