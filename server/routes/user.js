const express = require('express');
const { User } = require('../database/models');
const { generalControllers } = require('../controllers/general');
const { USER_NAME } = require('../utils/constants');

const generalController = generalControllers(User, USER_NAME);
const router = express.Router();

router.get('/',
  generalController.getAll);
router.post('/',
  generalController.create);
router.get('/:id',
  generalController.getById);
router.put('/:id',
  generalController.update);

module.exports = router;