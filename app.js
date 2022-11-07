const express = require('express');
const app = express();
const logger = require('morgan');
const port = 3000;
express.use(logger('dev'));

app.get('/', (req, res) => { res.send('Hello World!') })
app.get('/users/:id', (req, res) => {
  res.send('Ai vrut sa accesezi pagina de user cu id-ul ' + req.params.id)
})


app.listen(port, () => { console.log(`Example app listening on port ${port}`) })	
