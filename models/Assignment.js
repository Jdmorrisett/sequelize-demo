"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Assignment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Assignment.belongsTo(models.Task);
      Assignment.belongsTo(models.User);
    }
  }
  Assignment.init(
    {
      name: DataTypes.STRING,
      UserId: {
        type: DataTypes.INTEGER,
        references: {
          model: "user",
          key: "id",
        },
      },
      TaskId: {
        type: DataTypes.INTEGER,
        references: {
          model: "task",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Assignment",
      tableName: "assignment",
    }
  );
  return Assignment;
};
