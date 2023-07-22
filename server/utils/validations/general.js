const { body } = require('express-validator');
const { ID_FIELD, CREATED_AT, UPDATED_AT, DELETED_AT } = require('../constants');
const VALIDATION_MESSAGE = require('./validation-messages');

module.exports.generalValidations = [
  body(ID_FIELD)
    .not()
    .exists()
    .withMessage(VALIDATION_MESSAGE.NOT_PERMITTED(ID_FIELD)),
  body(CREATED_AT)
    .not()
    .exists()
    .withMessage(VALIDATION_MESSAGE.NOT_PERMITTED(CREATED_AT)),
  body(UPDATED_AT)
    .not()
    .exists()
    .withMessage(VALIDATION_MESSAGE.NOT_PERMITTED(UPDATED_AT)),
  body(DELETED_AT)
    .not()
    .exists()
    .withMessage(VALIDATION_MESSAGE.NOT_PERMITTED(DELETED_AT))
];
