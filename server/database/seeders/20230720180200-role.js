'use strict';

const { ROLE_TABLE_NAME } = require('../../utils/constants');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    return queryInterface.bulkInsert(ROLE_TABLE_NAME, [
      {
        id: 'e860214b-8632-4b4e-8864-f19ebf116af1',
        name: 'Admin',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'a860214b-8632-4b4e-8864-f19ebf116af2',
        name: 'User',
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  async down (queryInterface, _Sequelize) {
    return await queryInterface.bulkDelete(ROLE_TABLE_NAME, null, {});
  }
};
