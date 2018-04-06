const bcrypt = require('bcrypt');

// const pass = '123';
const saltRounds = 10;


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'hash', {
      type: Sequelize.STRING,
      unique: true,
    },)
      // .then(() => bcrypt.hash(pass, saltRounds))
      // .then(hash => queryInterface.bulkInsert('users', [{
      //   id: 1, firstName: "Admin", lastName: 'Admin', discount: 30, password: pass, hash}])
      // )
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('users', 'hash')
      .then(() => {
      return queryInterface.bulkDelete('users', {id:1})
      })
  },
};
