const express = require('express');
const { Role } = require('../database/models');
const { generalControllers } = require('../controllers/general');
const { ROLE_NAME } = require('../utils/constants');

const generalController = generalControllers(Role, ROLE_NAME);
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