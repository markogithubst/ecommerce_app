const express = require('express');
const { Category } = require('../database/models');
const { generalControllers } = require('../controllers/general');
const { generalValidator } = require('../middleware/general-validator');
const { paramValidations } = require('../utils/validations/param');
const { queryValidations } = require('../utils/validations/query');
const { categoryValidations } = require('../utils/validations/models/category');
const { checkIdParamExists } = require('../middleware/check-ids');
const { generalValidations } = require('../utils/validations/general');
const { CATEGORY_NAME } = require('../utils/constants');
const { caseInsensitiveNameCheck } = require('../middleware/check-name-attribute');

const generalController = generalControllers(Category, CATEGORY_NAME);
const router = express.Router();

router.get('/',
  generalValidator(queryValidations),
  generalController.getAll);
router.post('/',
  generalValidator([...generalValidations, ...categoryValidations]),
  caseInsensitiveNameCheck(Category),
  generalController.create);
router.get('/:id',
  generalValidator([...paramValidations, ...queryValidations]),
  checkIdParamExists(Category),
  generalController.getById);
router.put('/:id',
  generalValidator([...paramValidations, ...generalValidations, ...categoryValidations]),
  caseInsensitiveNameCheck(Category),
  checkIdParamExists(Category),
  generalController.update);
router.delete('/:id',
  generalValidator(paramValidations),
  checkIdParamExists(Category),
  generalController.softDelete);

module.exports = router;
