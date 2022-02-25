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
    autoLoadEntities: true,
    synchronize: true,
    entities: [],
    seeds: []
  }
})
