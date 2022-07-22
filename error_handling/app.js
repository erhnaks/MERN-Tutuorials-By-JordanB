const express = require('express');
const app = express();

app.listen(4000);

// Below Line is also working I commmented it to try differen method....

// app.get('/error', (req, res, next) => {
//   const err = new Error('Something went wrong ');
//   next(err);
// });

// const errorLogger = (err, req, res, next) => {
//   console.log(err.stack);
//   next(err);
// }
// app.use(errorLogger);

// const sendError = (err, req, res) => {
//   res.status(500).send(err.message);
// }
// app.use(sendError);

app.get('/error', (req, res, next) => {
  next(Error('Something went wrong'));
})

app.use((err, req, res, next) => {
  console.log(err.stack);
  next(err);
});

app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});
