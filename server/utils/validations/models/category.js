const { body } = require('express-validator');
const { CATEGORY_NAME, CATEGORY_DESCRIPTION } = require('../../constants');
const VALIDATION_MESSAGE = require('../validation-messages');

module.exports.categoryValidations = [
  body(CATEGORY_NAME)
    .notEmpty()
    .withMessage(VALIDATION_MESSAGE.NOT_PROVIDED(CATEGORY_NAME))
    .isString()
    .withMessage(VALIDATION_MESSAGE.NOT_A_STRING(CATEGORY_NAME))
    .isLength({ min: 2 })
    .withMessage(VALIDATION_MESSAGE.MIN_TWO_CHARACTERS_LONG(CATEGORY_NAME))
    .isLength({ max: 60 })
    .withMessage(VALIDATION_MESSAGE.MAX_SIXTY_CHARACTERS_LONG(CATEGORY_NAME)),
  body(CATEGORY_DESCRIPTION)
    .notEmpty()
    .withMessage(VALIDATION_MESSAGE.NOT_PROVIDED(CATEGORY_DESCRIPTION))
    .isString()
    .withMessage(VALIDATION_MESSAGE.NOT_A_STRING(CATEGORY_DESCRIPTION))
    .isLength({ min: 2 })
    .withMessage(VALIDATION_MESSAGE.MIN_TWO_CHARACTERS_LONG(CATEGORY_DESCRIPTION))
    .isLength({ max: 600 })
    .withMessage(VALIDATION_MESSAGE.MAX_SIXTY_CHARACTERS_LONG(CATEGORY_DESCRIPTION))
];
