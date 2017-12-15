import Sequelize from 'sequelize';
import sequelize from '../db';

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
    type: Sequelize.INTEGER
  },
  debt: {
    type: Sequelize.INTEGER
  },
  email: {
    type: Sequelize.STRING,
    isEmail: true,
    unique: true,
    primaryKey: true,
  },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});

export default Hommy;