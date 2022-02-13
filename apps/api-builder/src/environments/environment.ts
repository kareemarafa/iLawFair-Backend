export const environment = {
  production: false
}

export const databaseConfig = () => ({
  port: 6100,
  database: {
    host: 'localhost',
    port: 8886,
    username: 'root',
    password: 'password',
    name: 'webme_builder',
    autoLoadEntities: true,
    synchronize: true,
    entities: [],
    seeds: []
  }
})

export const authConfig = () => ({
  jwtSecret: 'secret',
  jwtExpiresIn: '30d'
})
