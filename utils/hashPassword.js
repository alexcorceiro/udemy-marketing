const bcrypt = require("bcryptjs")
const salt = bcrypt.genSaltSync(10)

const hashPassord = password => bcrypt.hashSync(password, salt)
const comparePassword = (inputPassword, hasedPassword) => bcrypt.compareSync(inputPassword,hasedPassword)

module.exports = {hashPassord, comparePassword}