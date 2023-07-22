const { body } = require('express-validator');
const { ROLE_NAME } = require('../../constants');
const VALIDATION_MESSAGE = require('../validation-messages');

module.exports.roleValidations = [
  body(ROLE_NAME)
    .notEmpty()
    .withMessage(VALIDATION_MESSAGE.NOT_PROVIDED(ROLE_NAME))
    .isString()
    .withMessage(VALIDATION_MESSAGE.NOT_A_STRING(ROLE_NAME))
    .isLength({ min: 2 })
    .withMessage(VALIDATION_MESSAGE.MIN_TWO_CHARACTERS_LONG(ROLE_NAME))
    .isLength({ max: 60 })
    .withMessage(VALIDATION_MESSAGE.MAX_SIXTY_CHARACTERS_LONG(ROLE_NAME))
];
