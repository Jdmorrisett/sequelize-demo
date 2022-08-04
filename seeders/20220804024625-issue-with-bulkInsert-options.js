'use strict';

module.exports = {
  up : function (queryInterface, Sequelize) {

    // https://sequelize.org/api/v6/class/src/dialects/abstract/query-interface.js~queryinterface#instance-method-bulkInsert
    // https://sequelize.org/api/v6/class/src/model.js~model#static-method-bulkCreate
    // ERROR: Cannot read properties of undefined (reading 'map')

    return queryInterface.bulkInsert('Users', [{
      first_name : 'John',
      last_name : 'Doe',
      bio : 'I just updated my profile',
      createdAt : new Date(),
      updatedAt : new Date(),
      email : 'johnDoe@example.com'
    },
    {
      first_name : 'Jane',
      last_name : 'Doe',
      bio : 'I am a new user to this application',
      createdAt : new Date(),
      updatedAt : new Date(),
      email : 'janeDoe@test.com'
    }], {updateOnDuplicate: ["bio", "email", "updatedAt"]});
  },

  down : function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', [{
      first_name :'John'
    }])
  }
};