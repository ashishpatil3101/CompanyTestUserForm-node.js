const dotenv = require('dotenv');
const bcrypt = require('bcrypt');

dotenv.config();

module.exports = {
   
    SALT: bcrypt.genSaltSync(10)
    
}