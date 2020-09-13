const userRepository = require("../repositories/userRepository")

module.exports = {
    async create(user) {
        return await userRepository.create(user)
    }
}