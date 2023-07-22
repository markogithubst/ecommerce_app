const express = require('express');
const { Order } = require('../database/models');
const { generalControllers } = require('../controllers/general');
const { ORDER_DATE } = require('../utils/constants');

const generalController = generalControllers(Order, ORDER_DATE);
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