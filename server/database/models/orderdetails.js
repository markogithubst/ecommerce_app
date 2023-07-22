'use strict';
const { v4: uuidv4 } = require('uuid');

const {
  Model
} = require('sequelize');
const { ORDER_DETAILS_MODEL_NAME, ORDER_DETAILS_TABLE_NAME, FK_PRODUCT } = require('../../utils/constants');
module.exports = (sequelize, DataTypes) => {
  class OrderDetails extends Model {
    static associate (models) {
      OrderDetails.belongsTo(models.Product, { foreignKey: FK_PRODUCT });
      models.Product.hasMany(OrderDetails, { foreignKey: FK_PRODUCT });
    }
  }
  OrderDetails.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    productId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    productQuantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    orderTotalPrice: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    hooks: {
      beforeCreate: async (model) => {
        model.id = uuidv4();
      }
    },
    sequelize,
    paranoid: true,
    modelName: ORDER_DETAILS_MODEL_NAME,
    tableName: ORDER_DETAILS_TABLE_NAME
  });
  return OrderDetails;
};
