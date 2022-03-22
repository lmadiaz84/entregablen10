const express = require('express');
const app = express();
const PORT = 8080;

const router = express.Router();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const productos = [];
const server = app.listen(PORT, () => {
  console.log(`servidor levantado en el puerto:  ${server.address().port}`
  );
});

server.on('error', (error) => console.log(`hubo un error ${error}`))

let idcontador = 1;

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('formulario', {productos});
});

app.get('/productos', (req, res) => {
  res.render('formulario', {productos});
});

app.post('/productos', (req, res) => {
  const {producto, precio, url} = req.body;
  if (producto != '' & precio != '' & url !=''){
  productos.push({id: idcontador,producto, precio, url});
  }
  console.log(productos);
  idcontador++
  //res.render('formulario', {productos});
  res.redirect('/');
});

