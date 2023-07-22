'use strict';
const { v4: uuidv4 } = require('uuid');

const {
  Model
} = require('sequelize');
const { PRODUCT_MODEL_NAME, PRODUCT_TABLE_NAME, FK_CATEGORY } = require('../../utils/constants');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate (models) {
      Product.belongsTo(models.Category, { foreignKey: FK_CATEGORY });
      models.Category.hasMany(Product, { foreignKey: FK_CATEGORY });
    }
  }
  Product.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    categoryId: {
      type: DataTypes.UUID,
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
    modelName: PRODUCT_MODEL_NAME,
    tableName: PRODUCT_TABLE_NAME
  });
  return Product;
};
