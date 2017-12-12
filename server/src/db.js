import Sequelize from 'sequelize';


const sequelize = new Sequelize('food', 'root', 'qwerty', {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;