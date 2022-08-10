'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsToMany(models.Task, { through: models.Assignment });
      User.hasMany(models.Assignment);
    }
  }
  User.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    bio: DataTypes.TEXT,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      },
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'user'
  });
  return User;
};