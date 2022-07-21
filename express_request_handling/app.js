const express = require('express');

const app = express();

app.listen(8080);

app.get('/', (req, res) => res.send('Hello, my name is JH!'));

let names = ['Erhan', 'Cameron', 'Mohamed', 'Lewis'];

//GetAll method
app.get('/getAll', (req, res) => res.send(names));

//getbyID method
app.get ('/get/:id', (reg, res) => res.send(names));
// delete by ID method
app.get('/delete/:id', (req, res) => {
  res.send(names.splice(req.params.id, 1));
});

// Create a request handler that replaces a name in the array with a name specified in a query parameter at an index specified in a URL parameter.

app.post('/replace/:index', (req, res) => {
  const name = req.query.name;
  const index = req.params.index;
  const old = names[index];
  names[index] = name;
  res.status(202).send(`${old} successfully replaced with ${name}`);
});


// app.post('/create/1?name=erhan'), (req, res) => console.log(res);