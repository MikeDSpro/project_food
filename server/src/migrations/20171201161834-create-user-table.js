'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
        unique: true,
      },
      firstName: {
        type: Sequelize.STRING,
      },
      lastName: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      discount: {
        type: Sequelize.INTEGER,
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    }).then(() => {
      return queryInterface.createTable('hommies', {
        id: {
          primaryKey: true,
          type: Sequelize.INTEGER,
          unique: true,
          autoIncrement: true,
        },
        firstName: {
          type: Sequelize.STRING,
        },
        lastName: {
          type: Sequelize.STRING
        },
        email: {
          type: Sequelize.STRING,
          isEmail: true,
          unique: true,
          primaryKey: true,
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
      }).then(() => {
        return queryInterface.createTable('hommies_balance', {
          id: {
            primaryKey: true,
            type: Sequelize.INTEGER,
            unique: true,
            autoIncrement: true,
          },
          date: {
            type: Sequelize.DATE,
          },
          amount: {
            type: Sequelize.STRING,
          },
          debt: {
            type: Sequelize.INTEGER,
          },
          createdAt: Sequelize.DATE,
          updatedAt: Sequelize.DATE,
        })
      }).then(() => {
        return queryInterface.createTable('services', {
          id: {
            primaryKey: true,
            type: Sequelize.INTEGER,
            unique: true,
            autoIncrement: true,
          },
          paid_in_diff: {
            type: Sequelize.STRING,
          },
          discount: {
            type: Sequelize.INTEGER,
          },
          date: {
            type: Sequelize.DATE,
          }
        })
      });
    })
  },
  
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users')
      .then(() => queryInterface.dropTable('hommies'))
      .then(() => queryInterface.dropTable('hommies_balance'))
      .then(() => queryInterface.dropTable('services'))
  }
};
