module.exports = {
    client: 'sqlite3',
    connection: {
        filename: "./db.sqlite"
    },
    migrations: {
        tableName: 'knex_migrations',
        directory: `${__dirname}/src/logic/database/migrations`
    },
    seeds: {
        directory: `${__dirname}/src/logic/database/seeds`
    }
};

