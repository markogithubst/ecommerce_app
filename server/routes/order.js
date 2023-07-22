const express = require('express');
const { Order } = require('../database/models');
const { generalControllers } = require('../controllers/general');
const { generalValidator } = require('../middleware/general-validator');
const { paramValidations } = require('../utils/validations/param');
const { queryValidations } = require('../utils/validations/query');
const { orderValidations } = require('../utils/validations/models/order');
const { checkIdParamExists } = require('../middleware/check-ids');
const { generalValidations } = require('../utils/validations/general');
const { ORDER_DATE } = require('../utils/constants');

const generalController = generalControllers(Order, ORDER_DATE);
const router = express.Router();

router.get('/',
  generalValidator(queryValidations),
  generalController.getAll);
router.post('/',
  generalValidator([...generalValidations, ...orderValidations]),
  generalController.create);
router.get('/:id',
  generalValidator([...paramValidations, ...queryValidations]),
  checkIdParamExists(Order),
  generalController.getById);
router.put('/:id',
  generalValidator([...paramValidations, ...generalValidations, ...orderValidations]),
  checkIdParamExists(Order),
  generalController.update);
router.delete('/:id',
  generalValidator(paramValidations),
  checkIdParamExists(Order),
  generalController.softDelete);

module.exports = router;