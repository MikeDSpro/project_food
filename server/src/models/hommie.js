import Sequelize from 'sequelize';
import sequelize from '../db';

const Hommie = sequelize.define('hommie', {
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
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});

export default Hommie;