"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    let insertValues = [
      {
        first_name: "John",
        last_name: "Doe",
        bio: "I just updated my profile again",
        createdAt: new Date(),
        updatedAt: new Date(),
        email: "johnDoe@test.com",
      },
      {
        first_name: "Jane",
        last_name: "Doe",
        bio: "I am a new user to this application",
        createdAt: new Date(),
        updatedAt: new Date(),
        email: "janeDoe@test.com",
      },
    ];

    for (let values of insertValues)
    // https://sequelize.org/api/v6/class/src/dialects/abstract/query-interface.js~queryinterface#instance-method-upsert
    // ERROR: Cannot read properties of undefined (reading 'primaryKeys')
      await queryInterface.upsert(
        "Users",
        values,
        {
          bio: values.bio,
          email: values.email,
          updatedAt: values.updatedAt,
        },
        { first_name: values.first_name, last_name: values.last_name }
      );
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
