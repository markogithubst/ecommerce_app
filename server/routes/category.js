const express = require('express');
const { Category } = require('../database/models');
const { generalControllers } = require('../controllers/general');
const { CATEGORY_NAME } = require('../utils/constants');

const generalController = generalControllers(Category, CATEGORY_NAME);
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