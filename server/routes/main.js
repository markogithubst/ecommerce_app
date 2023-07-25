const express = require('express');
const role = require('./role');
const user = require('./user');
const category = require('./category');
const orderDetails = require('./order-details');
const order = require('./order');
const product = require('./product');

const router = express.Router();

router.use('/role', role);
router.use('/user', user);
router.use('/category', category);
router.use('/order-details', orderDetails);
router.use('/order', order);
router.use('/product', product);

module.exports = router;
