const express = require('express');

const app = express();

app.listen(8080);

// const server = app.listen(() => { console.log(`Server 
// ${server.address().port}`); });   

// Above line will randomize port and printed out to the console

const routes = require('./routers/route');

const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(routes);