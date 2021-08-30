const express = require('express');
const morgan = require('morgan');
const exphbs  = require('express-handlebars');
const path  = require('path');
const { urlencoded } = require('express');
const { join } = require('path');
const app = express();
const port = 3009;

//cofig static folder
app.use(express.static(path.join(__dirname,'public')));

//HTTP logger
app.use(morgan('combined'));
//Template engine
app.engine('hbs', exphbs({extname:'.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));// set view folder
//
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json())

app.get('/', (req, res) => {
  res.render('home');
});
app.get('/search', (req, res) => {
  console.log("------check the query parameter------");
  console.log(req.query);
  console.log(req.query.str);
  res.render('search');
});
app.post('/search', (req, res) => {
  console.log(req.body);// cần sử dụng app.use(express.urlencoded());
  res.render('search');
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});