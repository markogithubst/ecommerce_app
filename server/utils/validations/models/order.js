const { body } = require('express-validator');
const { FK_USER, FK_ORDER_DETAILS, ORDER_DATE } = require('../../constants');
const VALIDATION_MESSAGE = require('../validation-messages');

module.exports.orderValidations = [
  body(FK_ORDER_DETAILS)
    .notEmpty()
    .withMessage(VALIDATION_MESSAGE.NOT_PROVIDED(FK_ORDER_DETAILS))
    .isUUID()
    .withMessage(VALIDATION_MESSAGE.NOT_UUID(FK_ORDER_DETAILS)),
  body(FK_USER)
    .notEmpty()
    .withMessage(VALIDATION_MESSAGE.NOT_PROVIDED(FK_USER))
    .isUUID()
    .withMessage(VALIDATION_MESSAGE.NOT_UUID(FK_USER)),
  body(ORDER_DATE)
    .notEmpty()
    .withMessage(VALIDATION_MESSAGE.NOT_PROVIDED(ORDER_DATE))
    .isDate()
    .withMessage(VALIDATION_MESSAGE.NOT_A_DATE(ORDER_DATE))
];
