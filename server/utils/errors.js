const { ApiError } = require('../middleware/error-handlers');
const RESPONSE_MSG = require('./constant-messages');
const { STATUS_CODE } = require('./constants');

module.exports.errors = {
  BAD_REQUEST: (details) => new ApiError(RESPONSE_MSG.INVALID_INPUT, STATUS_CODE.BAD_REQUEST, details),
  UNAUTHORIZED: (details) => new ApiError(RESPONSE_MSG.UNAUTHORIZED, STATUS_CODE.UNAUTHORIZED, details),
  FORBIDDEN: (details) => new ApiError(RESPONSE_MSG.FORBIDDEN, STATUS_CODE.FORBIDDEN, details),
  NOT_FOUND: (details) => new ApiError(RESPONSE_MSG.NOT_FOUND, STATUS_CODE.NOT_FOUND, details),
  CONFLICT: (details) => new ApiError(RESPONSE_MSG.CONFLICT, STATUS_CODE.CONFLICT, details)
};
