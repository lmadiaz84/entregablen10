const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const server = app.listen(PORT, () => {
  console.log(`servidor levantado en el puerto:  ${server.address().port}`
  );
});

server.on('error', (error) => console.log(`hubo un error ${error}`))

const productos = [];

let idcontador = 1;

app.get('/', (req, res) => {
  res.render('form.pug', {productos});
});

app.get('/productos', (req, res) => {
  res.render('form.pug', {productos});
});

app.get('/productos/tabla', (req, res) => {
  res.render('tabla.pug', {productos: productos});
});
app.post('/productos', (req, res) => {
  const {producto, precio, url} = req.body;
  productos.push({id: idcontador,producto, precio, url});
  console.log(productos);
  idcontador++
  res.render('form.pug', {productos});
});

app.set('views', './views');
app.set('view engine', 'pug');
