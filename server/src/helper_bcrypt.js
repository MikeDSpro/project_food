// import bcrypt from 'bcrypt';
const bcrypt = require('bcrypt')
const password = '123';
const saltRounds = 10;


const hash = bcrypt.hashSync(password, saltRounds);
console.log(hash);

// export default hash;


