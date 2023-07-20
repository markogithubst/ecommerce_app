const { errors } = require('../../utils/errors');
const models = require('../../database/models');
const { ASSOCIATION, ATTRIBUTES_TO_EXCLUDE } = require('../../utils/constants');
const RESPONSE_MSG = require('../../utils/constant-messages');

const pushModel = (association) => {
  return {
    model: models[association],
    attributes: { exclude: ATTRIBUTES_TO_EXCLUDE }
  };
};

module.exports.checkModelAssociations = (Model, include) => {
  const associations = Object.keys(Model.associations);
  const result = [];

  if (typeof include === 'string') {
    include = [include];
  }

  include.forEach(association => {
    if (!associations.includes(association)) {
      throw errors.NOT_FOUND(RESPONSE_MSG.NOT_FOUND_ASSOCIATION(Model.name, association));
    }
    if (Model.associations[association].associationType === ASSOCIATION.BELONGS_TO) {
      const tableName = Model.associations[association].options.name.singular;
      result.push(pushModel(tableName));
    }
    if (Model.associations[association].associationType === ASSOCIATION.HAS_MANY) {
      const tableName = Model.associations[association].options.name.singular;
      result.push(pushModel(tableName));
    }
    if (Model.associations[association].associationType === ASSOCIATION.BELONGS_TO_MANY) {
      const joinTable = Model.associations[association].options.through.model.name;
      const tableName = Model.associations[association].options.name.singular;
      result.push({
        through: { model: models[joinTable], attributes: { exclude: ATTRIBUTES_TO_EXCLUDE } },
        model: models[tableName],
        attributes: { exclude: ATTRIBUTES_TO_EXCLUDE }

      });
    }
  });
  return result;
};
