import Sequelize from 'sequelize';

const sequelize = new Sequelize('food', 'root', 'qwerty', {
  host: 'localhost',
  dialect: 'mysql',
});
export default sequelize;


//  this will put a foreign key for hommyId in the HommieBalance model
//  and give Hommy .setHommieBalance() and .getHommieBalance() instance methods

//  import HommieBalance from "./models/hommieBalance";
//  import Hommy from "./models/hommy";

//  HommieBalance.belongsTo(Hommy);
//  this will give Homyye the magic methods for addHommieBalance, etc.
//  but we already have a foreign key for hommyId in the HommieBalance model,
//  so it will maintain
//  the 1:m relationship
//  Hommy.hasMany(HommieBalance);




