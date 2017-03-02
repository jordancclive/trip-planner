const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const path = require('path');
const models = require('./models');

const app = express();

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', { noCache: true })

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
  extended:true
}))
app.use(bodyParser.json());
app.use('/cssvendor', express.static(path.join(__dirname, '/node_modules/bootstrap/')));
app.use('/jsvendor', express.static(path.join(__dirname, '/node_modules/jquery/')));
app.use('/media/', express.static(path.join(__dirname, '/media/')));
app.use(function(err,req,res,next){
  console.error(err)
  next();
})

app.get('/', (req,res,next) => {
  Promise.all([models.Hotel.findAll(),models.Restaurant.findAll(),models.Activity.findAll()])
  .then( (result) => {
    console.log('I have all the data, I am rendering');
    res.render('index',{hotels: result[0], restaurants: result[1], activities: result[2]});
  })
})

const port = process.env.PORT || 4000;

models.seed()
  .then( () =>{
    console.log(`DB seeded.`);
  });

app.listen(port, ()=> console.log(`Server listening on ${port}`));
