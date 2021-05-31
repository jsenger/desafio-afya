if (process.env.ENV === 'dev') {
  module.exports = {
    "type": "postgres",
    "url": process.env.DATABASE_URL,
    // "ssl": {
    //   "rejectUnauthorized": true
    // },
    "entities": ["./src/modules/**/infra/typeorm/entities/*.ts"],
    "migrations": ["./src/shared/infra/typeorm/migrations/*.ts"],
    "cli": {
      "migrationsDir": "./src/shared/infra/typeorm/migrations"
    }
  }
} else {
  module.exports = {
    "type": "postgres",
    "url": process.env.DATABASE_URL,
    "ssl": {
      "rejectUnauthorized": false
    },
    "entities": ["./dist/modules/**/infra/typeorm/entities/*.js"],
    "migrations": ["./dist/shared/infra/typeorm/migrations/*.js"],
    "cli": {
      "migrationsDir": "./src/shared/infra/typeorm/migrations"
    }
  }
}

