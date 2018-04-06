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
      discount: {
        type: Sequelize.INTEGER,
        defaultValue: 30,
      },
      email:{
        type: Sequelize.STRING,
        isEmail: true,
        unique: true,
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
        discount: {
          type: Sequelize.INTEGER,
          defaultValue: 30,
        },
        debt: {
          type: Sequelize.INTEGER,
          defaultValue: 0,
        },
        email: {
          type: Sequelize.STRING,
          isEmail: true,
          unique: true,
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
      }).then(() => {
        return queryInterface.createTable('hommieBalances', {
            id: {
              primaryKey: true,
              type: Sequelize.INTEGER,
              unique: true,
              autoIncrement: true,
            },
            date: {
              type: Sequelize.DATEONLY,
            },
            hommyId: {
              type: Sequelize.INTEGER,
              onDelete: "CASCADE",
              allowNull: false,
              references: {
                model: 'hommies',
                key: 'id'
              }
            },
            amount: {
              type: Sequelize.INTEGER,
              defaultValue: 0,
            },
            debt: {
              type: Sequelize.INTEGER,
              defaultValue: 0,
            }},
          {timestamps: false}
        )
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
            defaultValue: 0,
          },
          date: {
            type: Sequelize.DATE,
          }
        })
      }).then(() => {
        return queryInterface.createTable('days', {
          id: {
            primaryKey: true,
            type: Sequelize.INTEGER,
            unique: true,
            autoIncrement: true,
          },
          dayTotal:{
            type:Sequelize.INTEGER,
          },
          date: {
            type: Sequelize.STRING,
            unique: true,
          },
          createdAt: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.fn('NOW')
          },
          updatedAt: {
            type: Sequelize.DATE
          }
        })
      })
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users')
      .then(() => queryInterface.dropTable('hommieBalances'))
      .then(() => queryInterface.dropTable('hommies'))
      .then(() => queryInterface.dropTable('services'))
      .then(() => queryInterface.dropTable('days'))
  }
};
