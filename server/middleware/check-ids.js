const { callbackErrorHandler } = require('./error-handlers');
const { errors } = require('../utils/errors');
const RESPONSE_MSG = require('../utils/constant-messages');

module.exports.checkIdParamExists = (Model) => {
  return callbackErrorHandler(async (req, _res, next) => {
    const { id } = req.params;

    const entity = await Model.findByPk(id);

    if (!entity) {
      throw errors.NOT_FOUND(RESPONSE_MSG.NOT_FOUND_MODEL(Model.name));
    }

    return next();
  });
};
