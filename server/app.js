const express = require('express');
const router = require('./routes/main');
const { errorMiddleware } = require('./middleware/error-handlers');
const { STATUS_CODE } = require('./utils/constants');
const RESPONSE_MSG = require('./utils/constant-messages');
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors({
  origin: process.env.BASE_URL,
  credentials: true,
  exposedHeaders: 'Access-Control-Allow-Headers'
}));

app.use('/api/v1/', router);
router.use(errorMiddleware);

app.all('*', (_req, res) => {
  return res.status(STATUS_CODE.NOT_FOUND).json({
    error: RESPONSE_MSG.PAGE_NOT_FOUND
  });
});

module.exports = app;
