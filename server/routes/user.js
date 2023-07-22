const express = require('express');
const { User } = require('../database/models');
const { generalControllers } = require('../controllers/general');
const { generalValidator } = require('../middleware/general-validator');
const { paramValidations } = require('../utils/validations/param');
const { queryValidations } = require('../utils/validations/query');
const { userValidations } = require('../utils/validations/models/user');
const { checkIdParamExists } = require('../middleware/check-ids');
const { LAST_NAME } = require('../utils/constants');
const { generalValidations } = require('../utils/validations/general');
const generalController = generalControllers(User, LAST_NAME);
const router = express.Router();

router.get('/',
  generalValidator(queryValidations),
  generalController.getAll);
router.post('/',
  generalValidator([...generalValidations, ...userValidations]),
  generalController.create);
router.get('/:id',
  generalValidator([...paramValidations, ...queryValidations]),
  checkIdParamExists(User),
  generalController.getById);
router.put('/:id',
  generalValidator([...paramValidations, ...generalValidations, ...userValidations]),
  checkIdParamExists(User),
  generalController.update);
router.delete('/:id',
  generalValidator(paramValidations),
  checkIdParamExists(User),
  generalController.softDelete);

module.exports = router;
