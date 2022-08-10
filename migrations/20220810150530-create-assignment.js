"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("assignment", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      UserId: {
        type: Sequelize.INTEGER,
        refernces: {
          model: "user",
          key: "id",
        },
      },
      TaskId: {
        type: Sequelize.INTEGER,
        references: {
          model: "task",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("assignment");
  },
};
