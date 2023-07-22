const express = require('express');
const { Product } = require('../database/models');
const { generalControllers } = require('../controllers/general');
const { generalValidator } = require('../middleware/general-validator');
const { paramValidations } = require('../utils/validations/param');
const { queryValidations } = require('../utils/validations/query');
const { productValidations } = require('../utils/validations/models/product');
const { checkIdParamExists } = require('../middleware/check-ids');
const { generalValidations } = require('../utils/validations/general');
const { PRODUCT_NAME } = require('../utils/constants');
const { caseInsensitiveNameCheck } = require('../middleware/check-name-attribute');

const generalController = generalControllers(Product, PRODUCT_NAME);
const router = express.Router();

router.get('/',
  generalValidator(queryValidations),
  generalController.getAll);
router.post('/',
  generalValidator([...generalValidations, ...productValidations]),
  caseInsensitiveNameCheck(Product),
  generalController.create);
router.get('/:id',
  generalValidator([...paramValidations, ...queryValidations]),
  checkIdParamExists(Product),
  generalController.getById);
router.put('/:id',
  generalValidator([...paramValidations, ...generalValidations, ...productValidations]),
  caseInsensitiveNameCheck(Product),
  checkIdParamExists(Product),
  generalController.update);
router.delete('/:id',
  generalValidator(paramValidations),
  checkIdParamExists(Product),
  generalController.softDelete);

module.exports = router;