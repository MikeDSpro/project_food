import Sequelize from 'sequelize';
import sequelize from '../db';


const User = sequelize.define('user', {
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
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  hash: {
    type: Sequelize.STRING,
  },
  discount: {
    type: Sequelize.INTEGER,
    defaultValue: 30,
  },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,

});

export default User;