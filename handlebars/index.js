const express = require('express');
const {engine} = require('express-handlebars');
const app = express();
const PORT = 8080;
//const path = require('path');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.engine('hbs', engine({
  extname: '.hbs'
  //defaultLayout: path.join(__dirname, '')
}))
const productos = [];
const server = app.listen(PORT, () => {
  console.log(`servidor levantado en el puerto:  ${server.address().port}`
  );
});
app.set('view engine', 'hbs');
//app.set('views', './views');

server.on('error', (error) => console.log(`hubo un error ${error}`))

let idcontador = 1;


app.get('/', (req, res) => {
  res.render('formulario');
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
  //res.render('formulario');
  res.redirect('/')
});

