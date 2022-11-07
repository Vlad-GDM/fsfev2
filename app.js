const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => { res.send('Hello World!') })
app.get('/users/id', (req, res) => {
  res.send('Ai vrut sa accesezi pagina de user cu id-ul ' + req.params.id)
})


app.listen(port, () => { console.log(`Example app listening on port ${port}`) })	
