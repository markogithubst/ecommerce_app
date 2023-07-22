const express = require('express');
const { OrderDetails } = require('../database/models');
const { generalControllers } = require('../controllers/general');
const { generalValidator } = require('../middleware/general-validator');
const { paramValidations } = require('../utils/validations/param');
const { queryValidations } = require('../utils/validations/query');
const { orderDetailsValidations } = require('../utils/validations/models/order-details');
const { checkIdParamExists } = require('../middleware/check-ids');
const { generalValidations } = require('../utils/validations/general');
const { ORDER_DETAILS_PRODUCT_QUANTITY } = require('../utils/constants');

const generalController = generalControllers(OrderDetails, ORDER_DETAILS_PRODUCT_QUANTITY);
const router = express.Router();

router.get('/',
  generalValidator(queryValidations),
  generalController.getAll);
router.post('/',
  generalValidator([...generalValidations, ...orderDetailsValidations]),
  generalController.create);
router.get('/:id',
  generalValidator([...paramValidations, ...queryValidations]),
  checkIdParamExists(OrderDetails),
  generalController.getById);
router.put('/:id',
  generalValidator([...paramValidations, ...generalValidations, ...orderDetailsValidations]),
  checkIdParamExists(OrderDetails),
  generalController.update);
router.delete('/:id',
  generalValidator(paramValidations),
  checkIdParamExists(OrderDetails),
  generalController.softDelete);


module.exports = router;