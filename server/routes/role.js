const express = require('express');
const { Role } = require('../database/models');
const { generalControllers } = require('../controllers/general');
const { generalValidator } = require('../middleware/general-validator');
const { paramValidations } = require('../utils/validations/param');
const { roleValidations } = require('../utils/validations/models/role');
const { queryValidations } = require('../utils/validations/query');
const { checkIdParamExists } = require('../middleware/check-ids');
const { generalValidations } = require('../utils/validations/general');
const { ROLE_NAME } = require('../utils/constants');
const { caseInsensitiveNameCheck } = require('../middleware/check-name-attribute');

const generalController = generalControllers(Role, ROLE_NAME);
const router = express.Router();

router.get('/',
  generalValidator(queryValidations),
  generalController.getAll);
router.post('/',
  generalValidator([...generalValidations, ...roleValidations]),
  caseInsensitiveNameCheck(Role),
  generalController.create);
router.get('/:id',
  generalValidator([...paramValidations, ...queryValidations]),
  checkIdParamExists(Role),
  generalController.getById);
router.put('/:id',
  generalValidator([...paramValidations, ...generalValidations, ...roleValidations]),
  checkIdParamExists(Role),
  caseInsensitiveNameCheck(Role),
  generalController.update);
router.delete('/:id',
  generalValidator(paramValidations),
  checkIdParamExists(Role),
  generalController.softDelete);

module.exports = router;