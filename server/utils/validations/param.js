const { param } = require('express-validator');
const { ID_FIELD } = require('../constants');
const VALIDATION_MESSAGE = require('./validation-messages');

module.exports.paramValidations = [
  param(ID_FIELD)
    .exists()
    .withMessage(VALIDATION_MESSAGE.NOT_PROVIDED(ID_FIELD))
    .isUUID()
    .withMessage(VALIDATION_MESSAGE.NOT_UUID(ID_FIELD))
];
