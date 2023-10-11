'use strict';
const {
  Model
} = require('sequelize');

const {SALT} = require("../config/serverCofig");
const bcrypt = require("bcrypt");


module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    user_id: {
      type: DataTypes.UUID,
      unique:true,
      allowNull: false
    },
    user_name:{ 
      type: DataTypes.STRING,
      allowNull: false
    },
    user_email: {
      type: DataTypes.STRING,
      unique:true,
      allowNull: false
    
    },
    user_password: {
      type: DataTypes.STRING,
      allowNull: false
    },

    user_image: {
      type: DataTypes.BLOB("long")
    
    },
    total_orders: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    created_at: DataTypes.DATE,
    last_logged_in: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'User',
  });


  User.beforeCreate((user)=>{
    const encryptedPassword = bcrypt.hashSync(user.user_password,SALT );
    user.user_password = encryptedPassword;
  });


  return User;
};