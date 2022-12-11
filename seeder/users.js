const bcrypt = require("bcryptjs")
const ObjectId = require("mongodb").ObjectId;

const users = [
      {
    name: 'admin',
    lastName: 'admin',
    email: 'admin@admin.com',
    password: bcrypt.hashSync('admin@admin.com', 10),
    isAdmin: true,
  },
  {
      _id: ObjectId("63716c07e486ed1ce8e09bdb"),
    name: 'John',
    lastName: 'Doe',
    email: 'john@doe.com',
    password: bcrypt.hashSync('john@doe.com', 10),
    address: '2 rue de la paie',
    phoneNumber: "05326585459",
    city: "Paris",
    zipCode: "75100",
    state: "France"

  },
]

module.exports = users