'use strict';

const { PRODUCT_TABLE_NAME, ORDER_DETAILS_TABLE_NAME, ID_FIELD } = require('../../utils/constants');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(ORDER_DETAILS_TABLE_NAME, {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      product_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        references: {
          model: PRODUCT_TABLE_NAME,
          field: ID_FIELD
        }
      },
      product_quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      order_total_price: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable(ORDER_DETAILS_TABLE_NAME);
  }
};
