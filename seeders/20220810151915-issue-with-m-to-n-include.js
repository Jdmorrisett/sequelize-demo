"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert("user", [
      {
        first_name: "Joe",
        last_name: "Schmoe",
        bio: "I'm new here",
        email: "test@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert("task", [
      {
        title: "Take out Trash",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);


    await queryInterface.bulkInsert("assignment", [
      {
        name: "Joe assigned to trash",
        UserId: 1,
        TaskId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
