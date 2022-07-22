const express = require('express');
const app = express();

app.listen(8080);

app.get('/error', (req, res, next) => {
  const err = new Error('Something went wrong ');
  next(err);
});

const errorLogger = (err, req, res, next) => {
  console.log(err.stack);
  next(err);
}
app.use(errorLogger);

const sendError = (err, req, res) => {
  res.status(500).send(err.message);
}
app.use(sendError);

