import Sequelize from 'sequelize';
import sequelize from '../db';

const Day = sequelize.define('day', {
  id: {
    primaryKey: true,
    type: Sequelize.INTEGER,
    unique: true,
    autoIncrement: true,
  },
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.fn('NOW'),
  },
  dayTotal:{
    type:Sequelize.INTEGER,
    defaultValue: 0,
  },
  date: {
    type: Sequelize.STRING,
    unique: true,
  },
  updatedAt: {
    type: Sequelize.DATE
  }
});

export default Day;