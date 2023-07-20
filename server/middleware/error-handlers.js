const { Sequelize } = require('../database/models');
const RESPONSE_MSG = require('../utils/constant-messages');
const { STATUS_CODE } = require('../utils/constants');

module.exports.callbackErrorHandler = (callback) => {
  return async (req, res, next) => {
    try {
      await callback(req, res, next);
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
};

class ApiError extends Error {
  constructor (message, statusCode, details) {
    super(message);

    this.statusCode = statusCode;
    this.details = details;
  }
}
module.exports.ApiError = ApiError;

module.exports.errorMiddleware = async (error, _req, res, _next) => {
  if (error instanceof ApiError) {
    return res
      .status(error.statusCode)
      .json({
        message: error.message,
        details: error.details
      });
  }

  if (error instanceof Sequelize.UniqueConstraintError) {
    return res.status(STATUS_CODE.CONFLICT).json({
      type: error.errors[0].type,
      details: error.errors[0].message
    });
  }

  return res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json({ error: RESPONSE_MSG.INTERNAL_SERVER_ERROR });
};
