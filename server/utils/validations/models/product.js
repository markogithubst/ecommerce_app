const { body } = require('express-validator');
const { PRODUCT_NAME, PRODUCT_DESCRIPTION, FK_CATEGORY, PRODUCT_PRICE, PRODUCT_STOCK } = require('../../constants');
const VALIDATION_MESSAGE = require('../validation-messages');

module.exports.productValidations = [
  body(PRODUCT_NAME)
    .notEmpty()
    .withMessage(VALIDATION_MESSAGE.NOT_PROVIDED(PRODUCT_NAME))
    .isString()
    .withMessage(VALIDATION_MESSAGE.NOT_A_STRING(PRODUCT_NAME))
    .isLength({ min: 2 })
    .withMessage(VALIDATION_MESSAGE.MIN_TWO_CHARACTERS_LONG(PRODUCT_NAME))
    .isLength({ max: 60 })
    .withMessage(VALIDATION_MESSAGE.MAX_SIXTY_CHARACTERS_LONG(PRODUCT_NAME)),
  body(PRODUCT_DESCRIPTION)
    .notEmpty()
    .withMessage(VALIDATION_MESSAGE.NOT_PROVIDED(PRODUCT_DESCRIPTION))
    .isString()
    .withMessage(VALIDATION_MESSAGE.NOT_A_STRING(PRODUCT_DESCRIPTION))
    .isLength({ min: 2 })
    .withMessage(VALIDATION_MESSAGE.MIN_TWO_CHARACTERS_LONG(PRODUCT_DESCRIPTION))
    .isLength({ max: 600 })
    .withMessage(VALIDATION_MESSAGE.MAX_SIXTY_CHARACTERS_LONG(PRODUCT_DESCRIPTION)),
  body(PRODUCT_PRICE)
    .custom((value) => {
      const numericValue = parseFloat(value);
      if (isNaN(numericValue) || numericValue <= 0) {
        throw new Error(VALIDATION_MESSAGE.NOT_A_POSITIVE_INTEGER(PRODUCT_PRICE));
      }
      return true;
    }),
  body(PRODUCT_STOCK)
    .custom((value) => {
      const numericValue = parseFloat(value);
      if (isNaN(numericValue) || numericValue < 0) {
        throw new Error(VALIDATION_MESSAGE.NOT_A_ZERO_OR_POSITIVE_INTEGER(PRODUCT_STOCK));
      }
      return true;
    }),
  body(FK_CATEGORY)
    .notEmpty()
    .withMessage(VALIDATION_MESSAGE.NOT_PROVIDED(FK_CATEGORY))
    .isUUID()
    .withMessage(VALIDATION_MESSAGE.NOT_UUID(FK_CATEGORY))
];
