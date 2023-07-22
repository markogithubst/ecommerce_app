'use strict';
const { v4: uuidv4 } = require('uuid');

const {
  Model
} = require('sequelize');
const { ORDER_MODEL_NAME, ORDER_TABLE_NAME, FK_USER, FK_ORDER_DETAILS } = require('../../utils/constants');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate (models) {
      Order.belongsTo(models.User, { foreignKey: FK_USER });
      models.User.hasMany(Order, { foreignKey: FK_USER });
    }
    static associate (models) {
      Order.belongsTo(models.OrderDetails, { foreignKey: FK_ORDER_DETAILS });
      models.OrderDetails.hasOne(Order, { foreignKey: FK_ORDER_DETAILS });
    }
  }
  Order.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    orderDetailsId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    orderDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    isDelivered: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    hooks: {
      beforeCreate: async (model) => {
        model.id = uuidv4();
      }
    },
    sequelize,
    paranoid: true,
    modelName: ORDER_MODEL_NAME,
    tableName: ORDER_TABLE_NAME
  });
  return Order;
};
