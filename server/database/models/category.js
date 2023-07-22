'use strict';
const { v4: uuidv4 } = require('uuid');

const {
  Model
} = require('sequelize');
const { CATEGORY_MODEL_NAME, CATEGORY_TABLE_NAME } = require('../../utils/constants');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate (_models) {
    }
  }
  Category.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    description: {
      type: DataTypes.STRING,
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
    modelName: CATEGORY_MODEL_NAME,
    tableName: CATEGORY_TABLE_NAME
  });
  return Category;
};
