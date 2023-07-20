'use strict';

const { USER_TABLE_NAME } = require('../../utils/constants');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    return queryInterface.bulkInsert(USER_TABLE_NAME, [
      {
        id: 'e860214b-8632-4b4e-8864-f19ebf116111',
        first_name: 'John',
        last_name: 'Doe',
        email: 'john.doe@test.com',
        password: 'Password123',
        address: 'Manchester Road 5',
        city: 'London',
        phone_number: '091 111 2222',
        role_id: 'e860214b-8632-4b4e-8864-f19ebf116af1',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'e860214b-8632-4b4e-8864-f19ebf116222',
        first_name: 'Jane',
        last_name: 'Doe',
        email: 'jane.doe@test.com',
        password: 'Password123',
        address: 'Park Avenue 25',
        city: 'London',
        phone_number: '091 222 3333',
        role_id: 'e860214b-8632-4b4e-8864-f19ebf116af1',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'e860214b-8632-4b4e-8864-f19ebf116333',
        first_name: 'Gregory',
        last_name: 'House',
        email: 'gregory.house@test.com',
        password: 'Password123',
        address: 'Alexander Road 88',
        city: 'London',
        phone_number: '091 333 4444',
        role_id: 'a860214b-8632-4b4e-8864-f19ebf116af2',
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  async down (queryInterface, _Sequelize) {
    return await queryInterface.bulkDelete(USER_TABLE_NAME, null, {});
  }
};
