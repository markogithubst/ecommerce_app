const { body } = require('express-validator');
const { FK_ROLE, EMAIL, FIRST_NAME, LAST_NAME, FIRST_NAME_VALIDATION, LAST_NAME_VALIDATION, PASSWORD } = require('../../constants');
const VALIDATION_MESSAGE = require('../validation-messages');

module.exports.userValidations = [
  body(FIRST_NAME)
    .notEmpty()
    .withMessage(VALIDATION_MESSAGE.NOT_PROVIDED(FIRST_NAME_VALIDATION))
    .isString()
    .withMessage(VALIDATION_MESSAGE.NOT_A_STRING(FIRST_NAME_VALIDATION))
    .isLength({ min: 2 })
    .withMessage(VALIDATION_MESSAGE.MIN_TWO_CHARACTERS_LONG(FIRST_NAME_VALIDATION))
    .isLength({ max: 60 })
    .withMessage(VALIDATION_MESSAGE.MAX_SIXTY_CHARACTERS_LONG(FIRST_NAME_VALIDATION)),
  body(LAST_NAME)
    .notEmpty()
    .withMessage(VALIDATION_MESSAGE.NOT_PROVIDED(LAST_NAME_VALIDATION))
    .isString()
    .withMessage(VALIDATION_MESSAGE.NOT_A_STRING(LAST_NAME_VALIDATION))
    .isLength({ min: 2 })
    .withMessage(VALIDATION_MESSAGE.MIN_TWO_CHARACTERS_LONG(LAST_NAME_VALIDATION))
    .isLength({ max: 60 })
    .withMessage(VALIDATION_MESSAGE.MAX_SIXTY_CHARACTERS_LONG(LAST_NAME_VALIDATION)),
  body(EMAIL)
    .notEmpty()
    .withMessage(VALIDATION_MESSAGE.NOT_PROVIDED(EMAIL))
    .isEmail()
    .withMessage(VALIDATION_MESSAGE.NOT_AN_EMAIL),
  body(PASSWORD)
    .optional(true)
    .notEmpty()
    .withMessage(VALIDATION_MESSAGE.NOT_PROVIDED(PASSWORD))
    .isString()
    .withMessage(VALIDATION_MESSAGE.NOT_A_STRING(PASSWORD))
    .isLength({ min: 6 })
    .withMessage(VALIDATION_MESSAGE.MIN_SIX_CHARACTERS_LONG_PASSWORD)
    .isLength({ max: 60 })
    .withMessage(VALIDATION_MESSAGE.MAX_SIXTY_CHARACTERS_LONG(PASSWORD)),
  body(FK_ROLE)
    .notEmpty()
    .withMessage(VALIDATION_MESSAGE.NOT_PROVIDED(FK_ROLE))
    .isUUID()
    .withMessage(VALIDATION_MESSAGE.NOT_UUID(FK_ROLE))
];
