const router = require('express').Router();

let names = ['Erhan', 'Cameron', 'Mohamed', 'Lewis'];

router.get('/', (req, res) => res.send('Hello, my name is JH!'));

router.get('/getAll',  (req, res) => res.send(names));

router.get ('/get/:id', (reg, res) => res.send(names));

router.get('/delete/:id', (req, res) => {
  res.send(names.splice(req.params.id, 1));
});


router.post('/replace/:index', (req, res) => {
  const name = req.query.name;
  const index = req.params.index;
  const old = names[index];
  names[index] = name;
  res.status(202).send(`${old} successfully replaced with ${name}`);
});

router.post('/create', (req, res) => {

  let name = req.query.name;
  res.status(201).send(` ${name}`);

});

module.exports = router;