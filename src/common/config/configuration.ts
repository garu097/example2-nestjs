export default () => ({
    jwt: {
      secret:  process.env.JWT_SECRET,
      expiresIn: '2d',
    },
    database: {
      type: process.env.DATABASE_TYPE,
      host: process.env.DATABASE_HOST,
      port: process.env.DATABASE_PORT,
      username: process.env.DATABASE_USERNAME,
      password: process.env. DATABASE_PASSWORD,
      schema: process.env.DATABASE_SCHEMA,
    }
})