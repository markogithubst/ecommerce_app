const { Op } = require('sequelize');
const { callbackErrorHandler } = require('./error-handlers');
const { errors } = require('../utils/errors');
const RESPONSE_MSG = require('../utils/constant-messages');

module.exports.caseInsensitiveNameCheck = (Model) => {
  return callbackErrorHandler(async (req, _res, next) => {
    const { name } = req.body;
    if (name) {
      const modelInstance = await Model.findOne({
        where: {
          name: { [Op.iLike]: name }
        }
      });
      if (modelInstance) {
        throw errors.CONFLICT(RESPONSE_MSG.NAME_ALREADY_EXISTS(Model.name, name));
      }
    }
    next();
  });
};
