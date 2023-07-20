const express = require('express');
const role = require('./role');
const user = require('./user');

const router = express.Router();

router.use('/role', role);
router.use('/user', user);

module.exports = router;