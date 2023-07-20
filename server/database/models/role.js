'use strict';
const { v4: uuidv4 } = require('uuid');

const {
  Model
} = require('sequelize');
const { ROLE_MODEL_NAME, ROLE_TABLE_NAME } = require('../../utils/constants');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    static associate (_models) {
    }
  }
  Role.init({
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
    }
  }, {
    hooks: {
      beforeCreate: async (model) => {
        model.id = uuidv4();
      }
    },
    sequelize,
    paranoid: true,
    modelName: ROLE_MODEL_NAME,
    tableName: ROLE_TABLE_NAME
  });
  return Role;
};
