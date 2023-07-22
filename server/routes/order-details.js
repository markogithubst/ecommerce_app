const express = require('express');
const { OrderDetails } = require('../database/models');
const { generalControllers } = require('../controllers/general');
const { ORDER_DETAILS_PRODUCT_QUANTITY } = require('../utils/constants');

const generalController = generalControllers(OrderDetails, ORDER_DETAILS_PRODUCT_QUANTITY);
const router = express.Router();

router.get('/',
  generalController.getAll);
router.post('/',
  generalController.create);
router.get('/:id',
  generalController.getById);
router.put('/:id',
  generalController.update);
router.delete('/:id',
  generalController.softDelete);

module.exports = router;