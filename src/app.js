const express = require('express');
const { finished } = require('stream');
const swaggerUI = require('swagger-ui-express');
const path = require('path');
const YAML = require('yamljs');
const userRouter = require('./resources/users/user.router');
const boardRouter = require('./resources/boards/board.router');

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use((req, res) => {
  const { method, url } = req;
  const start = Date.now();

  // next();

  finished(res, () => {
    const ms = Date.now() - start;
    const { statusCode } = res;

    console.log(`${method} ${url} ${statusCode} [${ms}ms]`);
  });
});

app.use('/users', userRouter);
app.use('/boards', boardRouter);
app.use('*', (req, res) => {
  res.status(400).send('Bad request!');
});

module.exports = app;
