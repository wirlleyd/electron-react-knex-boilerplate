const knex = require('../database')

module.exports = {
    async create (user) {
        return await knex('users').insert(user)
    }
}