// const Sequelize = require('sequelize');
// const sequelize = require('../db');
//
// module.exports = (sequelize, DataTypes) => {
//   const Hommy = sequelize.define('User', {
//     id: {
//     primaryKey: true,
//     type: Sequelize.INTEGER,
//     field: 'id',
//     unique: true,
//   },
//   firstName: {
//     type: Sequelize.STRING,
//   },
//   lastName: {
//     type: Sequelize.STRING
//   },
//   discount: {
//     type: Sequelize.INTEGER,
//     defaultValue: 30,
//   },
//   debt: {
//     type: Sequelize.INTEGER,
//     defaultValue: 0,
//   },
//   email: {
//     type: Sequelize.STRING,
//     isEmail: true,
//     unique: true,
//     primaryKey: true,
//   },
//   createdAt: Sequelize.DATE,
//   updatedAt: Sequelize.DATE,
//   });
//   Hommy.associate = function(models) {
//     models.Hommy.hasMany(models.HommieBalance);
//   };
//
//   return Hommy;
// };

import Sequelize from 'sequelize';
import sequelize from '../db';
import hommieBalance from './hommieBalance';

const Hommy = sequelize.define('hommy', {
  id: {
    primaryKey: true,
    type: Sequelize.INTEGER,
    field: 'id',
    unique: true,
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
    primaryKey: true,
  },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
//   associations: function () {
//     Hommy.hasMany(hommieBalance, {
//       foreignKey: {
//         name: 'hommyId'
//       }
//     });
//   },
//   associate: function(models){
//   models.Hommy.hasMany(hommieBalance, {
//     foreignKey: 'hommyId',
//     constraints: false,
//   });
// }

});

Hommy.associate = (models) => {
  models.Hommy.hasMany(models.hommieBalance);
};

export default Hommy;


