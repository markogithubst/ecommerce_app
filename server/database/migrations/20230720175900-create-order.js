'use strict';

const { ORDER_TABLE_NAME, USER_TABLE_NAME, ID_FIELD, ORDER_DETAILS_TABLE_NAME } = require('../../utils/constants');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(ORDER_TABLE_NAME, {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false
      },
      order_details_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        references: {
          model: ORDER_DETAILS_TABLE_NAME,
          field: ID_FIELD
        }
      },
      user_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        references: {
          model: USER_TABLE_NAME,
          field: ID_FIELD
        }
      },
      order_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      is_delivered: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      deleted_at: {
        type: Sequelize.DATE
      }
    });
  },
  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable(ORDER_TABLE_NAME);
  }
};
