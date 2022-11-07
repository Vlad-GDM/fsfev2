const express = require('express');
const app = express();
const logger = require('morgan');
const port = 3000;

app.use(logger('dev'));

app.get('/', (req, res) => { res.send('Hello Mom!') })

app.get('/users/:id', (req, res) => {
  res.send('Ai vrut sa accesezi pagina de user cu id-ul ' + req.params.id)
})


app.listen(port, () => { console.log(`Example app listening on port ${port}`) })	
