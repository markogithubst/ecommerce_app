const { query } = require('express-validator');
const { INCLUDE_PARAM, PAGE_PARAM, SIZE_PARAM } = require('../constants');
const VALIDATION_MESSAGE = require('./validation-messages');

module.exports.queryValidations = [
  query(INCLUDE_PARAM)
    .optional(true)
    .not()
    .isInt()
    .withMessage(VALIDATION_MESSAGE.NOT_A_STRING(INCLUDE_PARAM))
    .not()
    .isEmpty()
    .withMessage(VALIDATION_MESSAGE.CANNOT_BE_EMPTY(INCLUDE_PARAM)),
  query(PAGE_PARAM)
    .optional(true)
    .isInt({ min: 1 })
    .withMessage(VALIDATION_MESSAGE.NOT_A_POSITIVE_INTEGER(PAGE_PARAM))
    .notEmpty()
    .withMessage(VALIDATION_MESSAGE.CANNOT_BE_EMPTY(PAGE_PARAM)),
  query(SIZE_PARAM)
    .optional(true)
    .isInt({ min: 1 })
    .withMessage(VALIDATION_MESSAGE.NOT_A_POSITIVE_INTEGER(SIZE_PARAM))
    .notEmpty()
    .withMessage(VALIDATION_MESSAGE.CANNOT_BE_EMPTY(SIZE_PARAM))
];
