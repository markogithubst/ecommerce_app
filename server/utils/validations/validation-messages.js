// bulk create project validations
const VALIDATION_MESSAGE = {
  // general validation functions
  NOT_PERMITTED: (attribute) => `Not permitted to set property ${attribute}`,
  NOT_PROVIDED: (attribute) => `${attribute} must be provided`,
  NOT_A_STRING: (attribute) => `${attribute} must be a string`,
  NOT_UUID: (attribute) => `${attribute} must be a UUID`,
  NOT_A_POSITIVE_INTEGER: (attribute) => `Value after ${attribute} must be a positive integer`,
  NOT_A_ZERO_OR_POSITIVE_INTEGER: (attribute) => `Value after ${attribute} must be zero or a positive integer`,
  CANNOT_BE_EMPTY: (attribute) => `Query param ${attribute} cannot be empty`,
  MIN_TWO_CHARACTERS_LONG: (attribute) => `${attribute} must be at least 2 characters long`,
  MAX_SIXTY_CHARACTERS_LONG: (attribute) => `${attribute} must be less than 60 characters long`,
  NOT_A_DATE: (attribute) => `${attribute} must be a date`,

  // general validation messages
  MUST_BE_ARRAY: 'Request body must be an array',

  // project validations
  NOT_BOOLEAN: '\'isDelivered\' must be a Boolean value',

  // user validations
  NOT_AN_EMAIL: '\'Email\' must be a valid email',
  MIN_SIX_CHARACTERS_LONG_PASSWORD: '\'Password\' must be at least 6 characters long'
};

module.exports = VALIDATION_MESSAGE;
