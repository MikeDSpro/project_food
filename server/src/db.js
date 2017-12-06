import Sequelize from 'sequelize';

// const sequelize = new Sequelize('mysql://user:pass@example.com:5432/dbname');

const sequelize = new Sequelize('food', 'root', 'qwerty', {
  host: '192.168.99.100',
  dialect: 'mysql',
});

export default sequelize;