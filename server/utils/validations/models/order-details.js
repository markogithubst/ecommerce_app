const { body } = require('express-validator');
const { FK_PRODUCT, ORDER_DETAILS_TOTAL_PRICE, ORDER_DETAILS_PRODUCT_QUANTITY } = require('../../constants');
const VALIDATION_MESSAGE = require('../validation-messages');

module.exports.orderDetailsValidations = [
  body(FK_PRODUCT)
    .notEmpty()
    .withMessage(VALIDATION_MESSAGE.NOT_PROVIDED(FK_PRODUCT))
    .isUUID()
    .withMessage(VALIDATION_MESSAGE.NOT_UUID(FK_PRODUCT)),
  body(ORDER_DETAILS_PRODUCT_QUANTITY)
    .custom((value) => {
      const numericValue = parseFloat(value);
      if (isNaN(numericValue) || numericValue <= 0) {
        throw new Error(VALIDATION_MESSAGE.NOT_A_POSITIVE_INTEGER(ORDER_DETAILS_PRODUCT_QUANTITY));
      }
      return true;
    }),
  body(ORDER_DETAILS_TOTAL_PRICE)
    .custom((value) => {
      const numericValue = parseFloat(value);
      if (isNaN(numericValue) || numericValue <= 0) {
        throw new Error(VALIDATION_MESSAGE.NOT_A_POSITIVE_INTEGER(ORDER_DETAILS_TOTAL_PRICE));
      }
      return true;
    })
];
