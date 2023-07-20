const { callbackErrorHandler } = require('../middleware/error-handlers');
const { getPagination, getPagingData } = require('../utils/pagination');

const { checkModelAssociations } = require('./helpers/model-associations');
const { STATUS_CODE, ASCENDING, ATTRIBUTES_TO_EXCLUDE } = require('../utils/constants');
const RESPONSE_MSG = require('../utils/constant-messages');

module.exports.generalControllers = (Model, orderBy) => ({

  create: callbackErrorHandler(async function (req, res) {
    const instanceData = req.body;

    await Model.create(instanceData);

    return res.status(STATUS_CODE.CREATED).json({
      message: RESPONSE_MSG.CREATE_SUCCESS(Model.name)
    });
  }),

  getAll: callbackErrorHandler(async function (req, res) {
    const { include, page, size } = req.query;
    const { limit, offset } = getPagination(page, size);

    const options = {
      order: [[orderBy, ASCENDING]],
      limit,
      offset,
      include: [],
      attributes: { exclude: ATTRIBUTES_TO_EXCLUDE },
      subQuery: false
    };

    if (include) {
      const includeOptions = checkModelAssociations(Model, include);
      options.include = includeOptions;
    }

    let allInstances = await Model.findAndCountAll(options);

    allInstances = getPagingData(allInstances, page, limit);

    return res.status(STATUS_CODE.OK).json({
      data: allInstances
    });
  }),

  getById: callbackErrorHandler(async function (req, res) {
    const { id } = req.params;
    const { include } = req.query;

    const options = {
      include: [],
      attributes: { exclude: ATTRIBUTES_TO_EXCLUDE }
    };

    if (include) {
      const includeOptions = checkModelAssociations(Model, include);
      options.include = includeOptions;
    }

    const singleInstance = await Model.findByPk(id, options);

    return res.status(STATUS_CODE.OK).json({
      data: singleInstance
    });
  }),

  update: callbackErrorHandler(async function (req, res) {
    const { id } = req.params;

    const [_updatedRows, updatedInstance] = await Model.update(req.body, {
      where: { id },
      returning: true
    });

    return res.status(STATUS_CODE.OK).json({
      message: RESPONSE_MSG.UPDATE_SUCCESS(Model.name),
      data: updatedInstance
    });
  }),

  hardDelete: callbackErrorHandler(async function (req, res) {
    const { id } = req.params;

    await Model.destroy({
      where: { id },
      force: true
    });

    return res.status(STATUS_CODE.NO_CONTENT).json();
  }),

  deleteAll: callbackErrorHandler(async function (req, res) {
    await Model.destroy({
      where: { },
      force: true,
      returning: true
    });

    return res.status(STATUS_CODE.NO_CONTENT).json();
  }),

  softDelete: callbackErrorHandler(async function (req, res) {
    const { id } = req.params;

    await Model.destroy({
      where: { id }
    });

    return res.status(STATUS_CODE.NO_CONTENT).json();
  })
});