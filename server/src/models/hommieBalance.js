// const Sequelize = require('sequelize');
// const sequelize = require('../db');

// module.exports = (sequelize, DataTypes) => {
//   const HommieBalance = sequelize.define('hommieBalance', {
//     id: {
//       primaryKey: true,
//       type: Sequelize.INTEGER,
//       unique: true,
//       autoIncrement: true,
//     },
//     date: {
//       type: Sequelize.DATE,
//     },
//     amount: {
//       type: Sequelize.INTEGER,
//       defaultValue: 0,
//     },
//     debt: {
//       type: Sequelize.INTEGER,
//       defaultValue: 0,
//     }},
//     {timestamps: false},
// );
//
//   HommieBalance.associate = (models) => {
//     models.HommieBalance.belongsTo(models.Hommy, {
//       onDelete: "CASCADE",
//       foreignKey: {
//         allowNull: false
//       }
//     });
//   };
//   return HommieBalance;
// };


import Sequelize from 'sequelize';
import sequelize from '../db';

const HommieBalance = sequelize.define('hommieBalance', {
  id: {
    primaryKey: true,
    type: Sequelize.INTEGER,
    unique: true,
    autoIncrement: true,
  },
  date: {
    type: Sequelize.DATE,
  },
  hommyId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'Hommy',
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
  {timestamps: false},
);

HommieBalance.associate = (models) => {
  models.HommieBalance.belongsTo(models.Hommy, {
    onDelete: "CASCADE",
    foreignKey: {
      allowNull: false
    }
  });
};


export default HommieBalance;
